import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-colabdialog',
  templateUrl: './colabdialog.component.html',
  styleUrls: ['./colabdialog.component.css']
})
export class ColabdialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ColabdialogComponent>,
   private noteCurdService:NotecrudService,
    private userService:UserService , 
    @Inject(MAT_DIALOG_DATA) private data ) { 
     
    }
   private email:String;
   

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  addCollaborator()
  {
    console.log("after close "+this.email);
    this.dialogRef.close();
    this.userService.getCollaboratorUserId(this.email).subscribe(
      (response:Number)=>{
        console.log(response);
        if(response>0)
        {
          this.noteCurdService.addCollaborator(response,this.data.notedetails1.noteid).subscribe(
            response=>
            {
              console.log(response);
            }
          )
        }

      }
    )
  }

  cancelCollaborator()
  {

  }

}


