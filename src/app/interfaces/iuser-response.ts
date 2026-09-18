import { IUser } from './iuser';

export interface IUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
}