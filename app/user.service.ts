import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../app/Model/register.model';
import { LoginUser } from '../app/Model/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: RegisterUser) {
    return this.http.post(`/api/user/register`, user);
}
}
