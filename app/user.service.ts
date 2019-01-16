import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../app/Model/register.model';
import { LoginUser } from '../app/Model/login.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private url='http://8080/api/user/';

  public registerUser(user: RegisterUser) :any {
    return this.http.post(this.url+'register', user);
}

 public loginUser(loginuser: LoginUser):any {
  return this.http.post(this.url+'login', loginuser);
}
}
