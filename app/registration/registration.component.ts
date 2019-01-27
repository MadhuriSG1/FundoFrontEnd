import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { RegisterUser } from '../Model/register.model';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user:RegisterUser=new RegisterUser();
  registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private userService: UserService,
     private matsnackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': [this.user.name,[ Validators.required]],
      'email': [this.user.email,[ Validators.required]],
      'password': [this.user.password,[ Validators.required,Validators.minLength(6)]],
      'mobileNumber':[this.user.mobileNumber, [Validators.required, Validators.maxLength(10)]]
  });
  }
  
  onSubmit() {
  console.log(this.user.email);
    this.userService.registerUser(this.user).subscribe(
      data => { 
        if(data.statusCode== 200)
        {
            this.matsnackbar.open(' Register Successfully ,Please Confirm Your Email Address', 'LogIn', {
              duration: 2000,});
              this.router.navigate(['/login']);
        }
         else{
        this.matsnackbar.open(data.statusMessage,"Register Fails",)
        }
      },
        
       error => {
           console.log("Error", error);
}
      );
      
  }

}
