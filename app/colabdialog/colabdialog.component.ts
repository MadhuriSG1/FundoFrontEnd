import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { UserService } from '../service/user.service';
import { TotalNote } from '../Model/totalnote.model';
import { MatSnackBar } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
@Component({
  selector: 'app-colabdialog',
  templateUrl: './colabdialog.component.html',
  styleUrls: ['./colabdialog.component.css']
})
export class ColabdialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ColabdialogComponent>,
   private noteCurdService:NotecrudService, @Inject(MAT_DIALOG_DATA) private data,
    private userService:UserService , private snackBar: MatSnackBar,private updatecardservice: UpdatecardsService,) { 
     
    }
   private email:String;
   

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  addCollaborator()
  {
    this.dialogRef.close();
    this.userService.getCollaboratorUserId(this.email).subscribe(
      (response:Number) =>
      {
        console.log(response);
        if(response >0)
        {
          this.noteCurdService.addCollaborator(this.data.notedetails.note.noteid,response).subscribe(
            response =>
            {
              console.log(response)
              this.snackBar.open(response.statusMessage,"",{
                duration:2000,})
                this.updatecardservice.changemessage2();
            }
          )
        }
      }
    )
}
  cancelCollaborator() {

  }

}

