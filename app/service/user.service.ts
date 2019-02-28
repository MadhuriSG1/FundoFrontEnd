import { Injectable } from '@angular/core';
import { RegisterUser } from '../Model/register.model';
import { LoginUser } from '../Model/login.model';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../Model/userdetails.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }
  )
};

const httpOptions2 = {
  headers: new HttpHeaders({
    'token': localStorage.getItem('Authorization')
  })
};


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

public resetPassword(token:string):any
{
  return this.http.get(this.url+'resetpassword/'+token);
}

public resetLink(loginmodel :LoginUser,token:string):any
{
  return this.http.post<LoginUser>(this.url+'resetpage/'+token,loginmodel);
}
public getCollaboratorUserId(email: String):Observable<Number>
{
  return this.http.get<Number>(this.url+'collabpersonid?email='+email,httpOptions2);
}
public uploadProfileImage(file:File):any{
  let formdata:FormData=new FormData();
  formdata.append('file',file);
  return this.http.post(this.url+"uploadimage",formdata,httpOptions2);
}
public getProfileImage():any{
  return this.http.get(this.url+"getprofileimage",httpOptions2)
}

public getUserDetails():Observable<UserDetails>
{
  return this.http.get<UserDetails>(this.url+"getuserdetails",httpOptions2)
}

}
