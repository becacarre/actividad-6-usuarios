import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { Home } from './home';
import { UsersService } from '../../services/users';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  const usersServiceMock = {
    getAll: jasmine.createSpy('getAll').and.returnValue(
      of({
        page: 1,
        per_page: 10,
        total: 0,
        total_pages: 1,
        results: []
      })
    )
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home],
      imports: [RouterModule],
      providers: [
        {
          provide: UsersService,
          useValue: usersServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});