import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserForm } from './user-form';
import { UsersService } from '../../services/users';

describe('UserForm', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;

  const usersServiceMock = {
    getById: jasmine.createSpy('getById'),
    create: jasmine.createSpy('create'),
    update: jasmine.createSpy('update')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserForm],
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        {
          provide: UsersService,
          useValue: usersServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});