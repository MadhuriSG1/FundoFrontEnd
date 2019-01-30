import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { UpdatecardsService } from '../service/updatecards.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


  //@Input() 
  private allnotes: CreateNoteModel[];

  showtoolbar = false;
  constructor(private notecrudservice: NotecrudService,private updatecardservice:UpdatecardsService) { }

  ngOnInit() {
    this.notecrudservice.getNotes().subscribe(
      response => {
        console.log(response);
        this.allnotes = response;
      },
      error => {
        console.log("Error", error);
      }
    )

    this.updatecardservice.currentnotes.subscribe(message => this.allnotes = message)
  }
}
