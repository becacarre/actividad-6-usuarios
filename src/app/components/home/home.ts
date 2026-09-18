import { Component, OnInit } from '@angular/core';

import { IUser } from '../../interfaces/iuser';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  users: IUser[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(page: number = 1): void {
    this.usersService.getAll(page).subscribe({
      next: (response) => {
        this.users = [...this.users, ...response.results];

        if (page < response.total_pages) {
          this.loadUsers(page + 1);
        } else {
          this.loading = false;
        }
      },
      error: () => {
        this.errorMessage = 'No se han podido cargar los usuarios.';
        this.loading = false;
      }
    });
  }
  deleteUser(user: IUser): void {
  if (!user._id) {
    return;
  }

  const confirmDelete = confirm(
    `¿Deseas borrar al usuario ${user.first_name} ${user.last_name}?`
  );

  if (!confirmDelete) {
    return;
  }

  this.usersService.deleteByMongoId(user._id).subscribe({
    next: () => {
      alert('Usuario eliminado correctamente.');

      this.users = this.users.filter(
        currentUser => currentUser._id !== user._id
      );
    },
    error: () => {
      alert('No se ha podido eliminar el usuario.');
    }
  });
}
}