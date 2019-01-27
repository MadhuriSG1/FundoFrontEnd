import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {MatSnackBar} from '@angular/material';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent   {

  token:string;
  constructor(private snackBar: MatSnackBar,userservice:UserService,private router:Router,private activedRoute: ActivatedRoute) { 

    this.token=activedRoute.snapshot.params['token'];
    userservice.resetPassword(this.token).subscribe(data=> {

      if(data.statusCode==200)
      { 
          this.snackBar.open('Check Your Email For ResetPage', 'Reset', {
          duration: 2000,});
      }
    else{
      this.snackBar.open(data.statusMessage, 'Not Verified', {
        duration: 2000,});
    }

  });
}
}
