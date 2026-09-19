import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { UserDetail } from './user-detail';
import { UsersService } from '../../services/users';

describe('UserDetail', () => {
  let component: UserDetail;
  let fixture: ComponentFixture<UserDetail>;

  const usersServiceMock = {
    getById: jasmine.createSpy('getById')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetail],
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        {
          provide: UsersService,
          useValue: usersServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});