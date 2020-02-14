import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

    usersApi = '../assets/users-data.json';

  getUsers() {
    return this.http.get<User[]>(this.usersApi);
  }

}

