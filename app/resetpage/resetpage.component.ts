import { Component, OnInit } from '@angular/core';
import { RegisterUser } from '../Model/register.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import {MatSnackBar} from '@angular/material';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resetpage',
  templateUrl: './resetpage.component.html',
  styleUrls: ['./resetpage.component.css']
})
export class ResetpageComponent implements OnInit {

  user :RegisterUser=new RegisterUser();
  resetForm: FormGroup;
  token:string;
  constructor(private formBuilder:FormBuilder,private userService:UserService,
  private matSnackbar:MatSnackBar,private router:Router, private activatedRouter:ActivatedRoute) { 
    this.token=activatedRouter.snapshot.params['token'];
  }
  
ngOnInit() {
    this.resetForm=this.formBuilder.group({
      'email':[this.user.email,[
        Validators.required,
        Validators.minLength(8)
      ]],
      'password':[this.user.password,[
        Validators.required,
        Validators.minLength(8)
      ]]
    })

  }
onResetPageClick()
  {
    this.userService.resetLink(this.user,this.token).subscribe(

      data =>
      {
        if(data.statusCode==200)
        {
          this.matSnackbar.open('Password Changed Successfully ', 'LogIn', {
            duration: 2000,});
            this.router.navigate(['/login']);
        }

        else{
          this.matSnackbar.open(data.statusMessage,"Password Reset Fails",{
            duration:2000,})
      }},
      error => {
        console.log("Error", error);
    }
    );
}

}
