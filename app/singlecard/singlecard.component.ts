import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import {MatSnackBar} from '@angular/material';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { UpdatecardsService } from '../service/updatecards.service';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  constructor(private notecrudservice:NotecrudService,private snackBar:
     MatSnackBar,private dialog: MatDialog,private updatecardservice:UpdatecardsService) { }
  
  @Input() notedetails:CreateNoteModel;

  ngOnInit() {
}
noteDelete()
{
  this.notecrudservice.deleteNote(this.notedetails).subscribe(
    response =>{
      if(response.statusCode==200)
      {
        this.snackBar.open(response.statusMessage,"",{
          duration:2000,
        })
      }

    },
    error =>{
      console.log("Error",error);
    } 
);
}

openDialog()
{
  console.log('hsgdhs');
  const dialogRef = this.dialog.open(MydialogComponent, {
    width: '500px',
    data: {notedetails:this.notedetails}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.notedetails = result;
    console.log(this.notedetails);
    this.notecrudservice.updateNote(this.notedetails).subscribe(
      response => {
        if(response.statusCode==200)
        {
          this.snackBar.open(response.statusMessage,"",{
            duration:2000,
          })
        }
        this.updatecardservice.changemessage();
      },
      error => {
         console.log("Error",error);
      } 
      )
  });
  

}
}
