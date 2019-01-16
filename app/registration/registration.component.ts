import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
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
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required,Validators.minLength(6)],
      mobileNumber: ['', [Validators.required, Validators.maxLength(10)]]
  });
  }
  
  onSubmit() {
      // this.submitted = true;

      // // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //     return;
      // }

      //this.loading = true;
    this.userService.registerUser(this.user)
      .subscribe(
        data =>{
          if(data.value==200)
          {
            this.matsnackbar.open("Register User Successfully ,Please check mail","Login",{
              duration: 2000,});

              this.router.navigate(['/login']);
          }
          else
          {
            this.matsnackbar.open("User Not Registered");

          }
        },
      error => {
          console.log("Error");
          
        
        });
      
  }

}
