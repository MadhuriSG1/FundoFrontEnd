import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatenoteComponent } from './createnote/createnote.component';
import { NotesComponent } from './notes/notes.component';
import { LabelsComponent } from './labels/labels.component';
import { HomeComponent } from './home/home.component';
import { Router, ActivatedRoute, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetpageComponent } from './resetpage/resetpage.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component'; 


const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'register', component: RegistrationComponent },
{ path: 'verify/:token', component: VerifyComponent },
{ path: 'login', component: LoginComponent },
{ path: 'forgotpassword', component: ForgotpasswordComponent },
{ path: 'resetpassword/:token', component: ResetpasswordComponent },
{ path: 'resetpage/:token', component: ResetpageComponent },
{ path: 'createnote', component: CreatenoteComponent },
{
  path: 'home', component: HomeComponent,
  children: [
    { path: '', redirectTo: 'note', pathMatch: 'full' },
    { path: 'note', component: NotesComponent },
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent},
    {path:'labels/:labelvalue',component:LabelsComponent , runGuardsAndResolvers: 'paramsChange',}
  ]
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }

