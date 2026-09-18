import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IUser } from '../../interfaces/iuser';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm implements OnInit {

  userForm!: FormGroup;

  isUpdate: boolean = false;
  userId?: number;

  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      first_name: [
        '',
        [
          Validators.required,
          Validators.pattern(/\S+/)
        ]
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.pattern(/\S+/)
        ]
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/\S+/)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      image: [
        '',
        [
          Validators.required,
          Validators.pattern(/^https?:\/\/.+/)
        ]
      ]
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isUpdate = true;
      this.userId = Number(id);
      this.loadUser(this.userId);
    }
  }

  loadUser(id: number): void {

    this.loading = true;

    this.usersService.getById(id).subscribe({
      next: (user) => {

        this.userForm.patchValue({
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          image: user.image
        });

        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'No se ha podido cargar el usuario.';
        this.loading = false;
      }
    });
  }

  onSubmit(): void {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const user: IUser = {
      first_name: this.userForm.value.first_name.trim(),
      last_name: this.userForm.value.last_name.trim(),
      username: this.userForm.value.username.trim(),
      email: this.userForm.value.email.trim(),
      image: this.userForm.value.image.trim()
    };

    if (this.isUpdate && this.userId) {
      this.updateUser(user);
    } else {
      this.createUser(user);
    }
  }

  createUser(user: IUser): void {

    this.usersService.create(user).subscribe({
      next: () => {
        alert('Usuario creado correctamente.');
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('No se ha podido crear el usuario.');
      }
    });
  }

  updateUser(user: IUser): void {

    if (!this.userId) {
      return;
    }

    this.usersService.update(this.userId, user).subscribe({
      next: () => {
        alert('Usuario actualizado correctamente.');
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('No se ha podido actualizar el usuario.');
      }
    });
  }
}