import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Label } from '../Model/label.model';
import { NotecrudService } from '../service/notecrud.service';

@Component({
  selector: 'app-editlabeldialog',
  templateUrl: './editlabeldialog.component.html',
  styleUrls: ['./editlabeldialog.component.css']
})
export class EditlabeldialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditlabeldialogComponent>, 
  @Inject(MAT_DIALOG_DATA) private data: Label[],private noteCurdService:NotecrudService)  { 
    }

  Label:string;

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


labelTitleupdate(updateLabel:Label)
 {
  console.log(updateLabel);
   this.noteCurdService.updateLabel(updateLabel).subscribe(
     response=>
    {
     console.log(response); 
     }
   );
 }

}


