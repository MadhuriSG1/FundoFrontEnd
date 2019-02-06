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

  private allnotes: CreateNoteModel[];

  showtoolbar = false;
  constructor(private updatecardservice:UpdatecardsService) {
    this.updatecardservice.changemessage('false','false')
   }

  ngOnInit() {

    this.updatecardservice.currentnotes.subscribe(message => this.allnotes = message);
  }
}

