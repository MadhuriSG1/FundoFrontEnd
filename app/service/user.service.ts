import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '../Model/register.model';
import { LoginUser } from '../Model/login.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private url='http://localhost:8080/api/user/';

  public registerUser(user: RegisterUser) :any {
    return this.http.post<RegisterUser>(this.url+'register', user);
}

 public loginUser(loginuser: LoginUser):any {
  return this.http.post(this.url+'login', loginuser,{observe:"response"});
}

public verifyUser(token: String):any {
  return this.http.get(this.url+'verify'+token);
  
}

public forgotPassword(email:string):any{
  return this.http.get(this.url+'forgotpassword/?email='+email);
}

public resetPassword(token:string):any{
  return this.http.get(this.url+'resetpassword/'+token);
}

public resetLink(loginmodel :LoginUser,token:string):any
{
  return this.http.post<LoginUser>(this.url+'resetpage/'+token,loginmodel);
}
}
