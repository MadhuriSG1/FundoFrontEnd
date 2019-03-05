import { Component, OnInit,Inject,Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { UserService } from '../service/user.service';
import { TotalNote } from '../Model/totalnote.model';
import { MatSnackBar } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';
import { UserDetails } from '../Model/userdetails.model';
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
   private userDetails=new UserDetails();
   @Input() notedetails:TotalNote;
   

  ngOnInit() {
    this.userService.getUserDetails().subscribe(
      response=>
      {
        console.log(response);
        this.userDetails=response;
      }
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  addCollaborator()
  {
    this.dialogRef.close();
    this.userService.getCollaboratorUserId(this.email).subscribe(
      (response) =>
      {
        console.log(response);
        if(response >0)
        {
        
          this.noteCurdService.addCollaborator(response,this.data.notedetails.note.noteid).subscribe(
            (response) =>
            {
              console.log(response);
              if(response)
              {            
              console.log(response);
              this.snackBar.open(response.statusMessage,"",{
                duration:2000,})
              this.updatecardservice.changemessage2();
            }
            
            if(response==-1){
              this.snackBar.open("Entered Invalid Email","",{
                duration:2000,})
            }
            }
           
          )
        }
        
      }
    )
}
  cancelCollaborator(email) {
    
    this.userService.getCollaboratorUserId(email).subscribe(
      response=>
      {
        console.log("responsesfdsgfdg ="+response);
        if(response>0)
        {
          this.noteCurdService.deleteCollaborator(response,this.data.notedetails.note.noteid).subscribe(
            response=>
            {
              this.snackBar.open(response.statusMessage,"",{
                duration:2000,})
                this.updatecardservice.changemessage2();
                
              

            }
          )

        }
      }
    )

  }

}

