import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


  //@Input() 
  private allnotes: CreateNoteModel[];

  showtoolbar = false;
  constructor(private notecrudservice: NotecrudService) { }

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
  }
}
