import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, MatSnackBarModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserService } from './service/user.service';
import { NotecrudService } from './service/notecrud.service';
import { UpdatecardsService } from './service/updatecards.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SidebartoggleService } from './home/sidebartoggle.service';
import { VerifyComponent } from './verify/verify.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResetpageComponent } from './resetpage/resetpage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { CreatenoteComponent } from './createnote/createnote.component';
import { SinglecardComponent } from './singlecard/singlecard.component';
import { NotesComponent } from './notes/notes.component';
import { MydialogComponent } from './mydialog/mydialog.component';
import { EditlabeldialogComponent } from './editlabeldialog/editlabeldialog.component';
import { LabelsComponent } from './labels/labels.component';
import {MatChipsModule} from '@angular/material/chips'; 


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
    NotesComponent,
    MydialogComponent,
    EditlabeldialogComponent,
    LabelsComponent
  ],
  entryComponents: [MydialogComponent, SinglecardComponent,EditlabeldialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatChipsModule
  ],
  providers: [UserService, SidebartoggleService, NotecrudService, UpdatecardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
