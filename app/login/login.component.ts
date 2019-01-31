import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../Model/login.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  user: LoginUser = new LoginUser();
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private matsnackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [Validators.required]],
      'password': [this.user.password, [Validators.required, Validators.minLength(6)]]
    });
  }
  onLoginSubmit() {
    console.log(this.user.email);
    this.userService.loginUser(this.user).subscribe(
      data => {
        if (data.body.statusCode == 200) {
          this.matsnackbar.open(' Login Successfully ', 'LogIn', {
            duration: 2000,
          });
          console.log(data.headers);
          localStorage.setItem('Authorization', data.headers.get('Authorization'));
          this.router.navigate(['./home']);
        }
        else {
          console.log(data);
          this.matsnackbar.open(data.statusMessage, "Login Fails")
        }
      },

      error => {
        console.log("Error", error);
      }
    );
  }

  navigateToRegistration(): void {
    this.router.navigate(["/register"]);
  }

}
