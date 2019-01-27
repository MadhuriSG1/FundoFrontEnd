import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,
        MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
        MatRadioModule,MatListModule,MatSnackBarModule} from  '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { Router,ActivatedRoute ,Routes} from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserService } from './service/user.service';
import { NotecrudService } from './service/notecrud.service';

import { SidebartoggleService } from './home/sidebartoggle.service';
import { VerifyComponent } from './verify/verify.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResetpageComponent } from './resetpage/resetpage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MatMenuModule} from '@angular/material/menu';
import { CreatenoteComponent } from './createnote/createnote.component';
import { SinglecardComponent } from './singlecard/singlecard.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'register', component: RegistrationComponent },
{path : 'verify/:token' ,component:VerifyComponent},
{ path: 'login', component: LoginComponent },
{ path: 'forgotpassword', component: ForgotpasswordComponent },
{ path: 'resetpassword/:token', component: ResetpasswordComponent },
{path : 'resetpage/:token',component:ResetpageComponent},
{path : 'createnote',component:CreatenoteComponent},
{ path: 'home', component: HomeComponent ,
children:[
  {path:'',redirectTo:'notebar',pathMatch:'full'},
  {path:'notebar',component:NotesComponent}
]
}];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    VerifyComponent,
    ResetpageComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    CreatenoteComponent,
    SinglecardComponent,
    NotesComponent
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
    [RouterModule.forRoot(routes)],
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [UserService,SidebartoggleService,NotecrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
