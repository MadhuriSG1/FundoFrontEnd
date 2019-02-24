import { Component, OnInit } from '@angular/core';
import { Label } from '../Model/label.model';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import { NotecrudService } from '../service/notecrud.service';
import { MatDialog } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
import { MatSnackBar } from '@angular/material';
import { UpdatelabelsService } from '../service/updatelabels.service';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ViewchangeService } from '../service/viewchange.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private clickedEvent: boolean;
  private show:boolean;
  label: Label = new Label();
  labelsall: Label[];

  constructor(private notecurdservice: NotecrudService, private dialog: MatDialog,
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
        this.updatelabelsService.changemessagelabel();
      }
      else
      {
        this.notecurdservice.getAllLabels().subscribe(
          response=>
          {
            this.labelsall=response;
          }
        )
      }
    });
    
  }

  changeView(){
    this.viewchangeservice.onViewChange();
   console.log(this.show);
}

  SignOut(): void {
    this.router.navigate(["/login"]);
  }

}
