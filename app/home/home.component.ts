import { Component, OnInit } from '@angular/core';
import { Label } from '../Model/label.model';
import { UserDetails } from '../Model/userdetails.model';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import { ProfileimageComponent } from '../profileimage/profileimage.component';
import { NotecrudService } from '../service/notecrud.service';
import { MatDialog } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
import { MatSnackBar } from '@angular/material';
import { UpdatelabelsService } from '../service/updatelabels.service';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ViewchangeService } from '../service/viewchange.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private clickedEvent: boolean;
  private show:boolean;
  private userDetails=new UserDetails();
  label: Label = new Label();
  labelsall: Label[];
  private profileImage:string=localStorage.getItem('Authorization');

  constructor(private notecurdservice: NotecrudService,private userService:UserService, private dialog: MatDialog,
     private updatecardsService: UpdatecardsService,private matsnackbar:MatSnackBar,
     private updatelabelsService:UpdatelabelsService,private router: Router,private viewchangeservice:ViewchangeService) {
  }
  ngOnInit() {
    this.notecurdservice.getAllLabels().subscribe(
      response => {
        this.labelsall = response;
        console.log(response);
      }
    );
    this.viewchangeservice.currentView.subscribe(
      response=>{
        this.show=response;
      }
    );
    this.userService.getUserDetails().subscribe(
      response=>
      {
        this.userDetails=response;
      }
    )
    
  }
  childEventClicked(open: boolean) {
    this.clickedEvent = open;
  }
  EditLabelDialog() {
    const dialogRef = this.dialog.open(EditlabeldialogComponent, {
      width: '300px',
      height: '350px',
      data: { labelsall: this.labelsall }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updatecardsService.changemessage2();
      this.notecurdservice.getAllLabels().subscribe(
                   response =>
                    {
                       this.labelsall=response;
                     }
                 )
      if (result != null && result != "") 
      {
        this.label.labelTitle = result;
        this.notecurdservice.createLabel(this.label).subscribe(
          response => {
            console.log(response);
            
          }
         
        )
        this.notecurdservice.getAllLabels().subscribe(
          response=>
          {
            this.labelsall=response;
          }
        );
        this.updatelabelsService.changemessagelabel();
      }
      else
      {
        this.notecurdservice.getAllLabels().subscribe(
          response=>
          {
            this.labelsall=response;
          }
        );
      }
    });
    
  }
  ProfileSelectDialog()
  {
    const dialogRef2=this.dialog.open(ProfileimageComponent,{
    width:'300px',
    height:'300px',
    });
   dialogRef2.afterClosed().subscribe(
     (image:any)=>
     {
       if(image!=null)
       {
         this.userService.uploadProfileImage(image.file).subscribe(
           value=>
           {
             console.log(value);
           }
         );
       }

     }
   )

  }
  changeView(){
    this.viewchangeservice.onViewChange();
   console.log(this.show);
}

  SignOut(): void {
    this.router.navigate(["/login"]);
  }

}
