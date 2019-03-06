import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatListModule, MatSnackBarModule, MatTooltipModule
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
import { UpdatelabelsService } from './service/updatelabels.service';
import { ViewchangeService } from './service/viewchange.service';
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
import { MatChipsModule } from '@angular/material/chips';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ColabdialogComponent } from './colabdialog/colabdialog.component';
import { ProfileimageComponent } from './profileimage/profileimage.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MomentModule } from 'ngx-moment';





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
    LabelsComponent,
    ArchiveComponent,
    TrashComponent,
    ColabdialogComponent,
    ProfileimageComponent
  ],
  entryComponents: [MydialogComponent, SinglecardComponent, EditlabeldialogComponent,
    ColabdialogComponent, ProfileimageComponent],
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
    MatChipsModule,
    MatTooltipModule, MatGridListModule, ImageCropperModule, OwlDateTimeModule,
    OwlNativeDateTimeModule,NgxMaterialTimepickerModule,MomentModule,MatTabsModule

  ],
  providers: [UserService, SidebartoggleService, NotecrudService,
    ViewchangeService, UpdatecardsService, UpdatelabelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
