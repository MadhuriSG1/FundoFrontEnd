import { Component, OnInit } from '@angular/core';
import { Label } from '../Model/label.model';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import { NotecrudService } from '../service/notecrud.service';
import { MatDialog } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
import { MatSnackBar } from '@angular/material';
import { UpdatelabelsService } from '../service/updatelabels.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private clickedEvent: boolean;
  label: Label = new Label();
  labelsall: Label[];

  constructor(private notecurdservice: NotecrudService, private dialog: MatDialog,
     private updatecardsService: UpdatecardsService,private matsnackbar:MatSnackBar,
     private updatelabelsService:UpdatelabelsService,private router: Router) {
  }
  ngOnInit() {
    this.notecurdservice.getAllLabels().subscribe(
      response => {
        this.labelsall = response;
        console.log(response);
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
      if (result != null && result != "") {
        this.label.labelTitle = result;
        this.notecurdservice.createLabel(this.label).subscribe(
          response => {
            console.log(response);
          }
        )
      }
    });
    
  }

  SignOut(): void {
    this.router.navigate(["/login"]);
  }
}
