import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from '../../interfaces/iuser';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css'
})
export class UserDetail implements OnInit {

  user?: IUser;
  loading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage = 'El usuario indicado no es válido.';
      this.loading = false;
      return;
    }

    this.usersService.getById(id).subscribe({
      next: (response) => {
        this.user = response;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No se ha podido cargar el usuario.';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  goToUpdate(): void {
    if (this.user?.id) {
      this.router.navigate(['/updateuser', this.user.id]);
    }
  }
  deleteUser(): void {
  if (!this.user?._id) {
    return;
  }

  const confirmDelete = confirm(
    `¿Deseas borrar al usuario ${this.user.first_name} ${this.user.last_name}?`
  );

  if (!confirmDelete) {
    return;
  }

  this.usersService.deleteByMongoId(this.user._id).subscribe({
    next: () => {
      alert('Usuario eliminado correctamente.');
      this.router.navigate(['/home']);
    },
    error: () => {
      alert('No se ha podido eliminar el usuario.');
    }
  });
}
}