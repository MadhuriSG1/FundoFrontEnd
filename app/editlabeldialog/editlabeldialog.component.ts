import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Label } from '../Model/label.model';
import { NotecrudService } from '../service/notecrud.service';
import { UpdatelabelsService } from '../service/updatelabels.service';

@Component({
  selector: 'app-editlabeldialog',
  templateUrl: './editlabeldialog.component.html',
  styleUrls: ['./editlabeldialog.component.css']
})
export class EditlabeldialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditlabeldialogComponent>, 
  @Inject(MAT_DIALOG_DATA) private data: Label[],private noteCurdService:NotecrudService,
  private updatelabelsService:UpdatelabelsService)  { 
    this.noteCurdService.getAllLabels().subscribe(
      response=>
      {
       console.log(response);
      });
    }

  Label:string;

  ngOnInit() {
    console.log(this.data);
    this.noteCurdService.getAllLabels().subscribe(
      response=>
      {
       console.log(response);
      });
    
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
     console.log("res==="+response); 
     }
   );
 }

 deleteLabel(deleteLabel:Label)
 {
  this.noteCurdService.deleteLabel(deleteLabel).subscribe(
    response =>
    {
      console.log(response);
      this.noteCurdService.getAllLabels().subscribe(
        response=>
        {
         console.log(response);
        })
    }
)

 }

 

}

