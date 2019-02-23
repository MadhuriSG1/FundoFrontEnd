import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { UpdatecardsService } from '../service/updatecards.service';
import {MatSnackBar} from '@angular/material';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';
import { NotecrudService } from '../service/notecrud.service';
import { ViewchangeService } from '../service/viewchange.service';
import { TotalNote } from '../Model/totalnote.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  private  allnotes:TotalNote[];
  private currentView:boolean;
  @Input() notedetails:TotalNote;

  constructor(private updatecardsService:UpdatecardsService,private snackBar:
    MatSnackBar,private dialog: MatDialog,private updatecardservice:UpdatecardsService,
    private notecrudservice:NotecrudService,private viewchangeService:ViewchangeService ) { 
    this.updatecardsService.changemessage('false','true');
  }
  
  ngOnInit() {
    
    this.updatecardsService.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes
      );
      this.viewchangeService.currentView.subscribe(view=>
        {
          this.currentView=view
        }
        );
      
}


}
