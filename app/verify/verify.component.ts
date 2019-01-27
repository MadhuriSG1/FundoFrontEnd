import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { RegisterUser } from '../Model/register.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent  {
 token:String
 constructor(private userService: UserService, private matsnackbar: MatSnackBar, 
  private router: Router, private activatedrouter:  ActivatedRoute) { 
    this.token=activatedrouter.snapshot.params['token'];
    console.log(this.token);
    userService.verifyUser(this.token)
  .subscribe(
    data =>{
      if(data.value==200)
      {
        this.matsnackbar.open("Verify User Successfully ,","Verify",{
          duration: 2000,});

          this.router.navigate(['/login']);
      }
      else
      {
        this.matsnackbar.open("User Not Verified");

      }
    });
  
  }

  
  ngOnInit() {
  }

}
