import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,
        MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
        MatRadioModule,MatListModule,MatSnackBarModule} from  '@angular/material';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { Router,ActivatedRoute ,Routes} from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserService } from './user.service';
import { VerifyComponent } from './verify/verify.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResetpageComponent } from './resetpage/resetpage.component';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'register', component: RegistrationComponent },
{ path: 'login', component: LoginComponent },
{ path: 'forgotpassword', component: ForgotpasswordComponent },
{ path: 'resetpassword', component: ResetpasswordComponent }];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    VerifyComponent,
    ResetpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, 
    MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    HttpClientModule,
    RouterModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
