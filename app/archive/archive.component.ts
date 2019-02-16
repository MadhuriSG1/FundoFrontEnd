import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { UpdatecardsService } from '../service/updatecards.service';
import {MatSnackBar} from '@angular/material';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import { NotecrudService } from '../service/notecrud.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  private  allnotes:CreateNoteModel[];
  @Input() notedetails:CreateNoteModel;

 // haspinned;
 // hasunpinned;
  constructor(private updatecardsService:UpdatecardsService,private snackBar:
    MatSnackBar,private dialog: MatDialog,private updatecardservice:UpdatecardsService,
    private notecrudservice:NotecrudService) { 
    this.updatecardsService.changemessage('false','true');
    
  }

  ngOnInit() {
    
    this.updatecardsService.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes
      );
      
}
unArchivenote(){
  this.notedetails.isArchive=this.notedetails.isArchive;
  if(this.notedetails.isArchive)
  {
    this.notedetails.isPin=false;
  }
  this.notecrudservice.updateNote(this.notedetails).subscribe(
    response => {
      if(response.statusCode==200)
      {
        this.snackBar.open(response.statusMessage,"",{
          duration:2000,
        })
        this.updatecardservice.changemessage2();
      }
    },
    error => {
       console.log("Error",error);
    } 
    );
  
}

}
