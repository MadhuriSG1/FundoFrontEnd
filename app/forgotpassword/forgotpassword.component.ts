import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email: string;

  constructor(private matsnackbar: MatSnackBar, private userService: UserService, ) { }

  ngOnInit() {
  }
  onResetSubmit() {
    this.userService.forgotPassword(this.email).subscribe(

      data => {
        if (data.statusCode == 200) {
          this.matsnackbar.open('A Reset Link Is Send To Your Email Address', '', {
            duration: 2000,
          })
        }
        else {
          this.matsnackbar.open(data.statusMessage, "", {
            duration: 2000,
          })
        }
      }
    )
  }
}
