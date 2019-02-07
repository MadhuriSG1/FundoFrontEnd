import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { UpdatecardsService } from '../service/updatecards.service';
import { UpdatelabelsService } from '../service/updatelabels.service';
import { Label } from '../Model/label.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private allnotes: CreateNoteModel[];
  private alllabels: Label[];

  showtoolbar = false;
  constructor(private updatecardservice:UpdatecardsService,private updatelabelsService:UpdatelabelsService ) {
    this.updatecardservice.changemessage('false','false')
   }

  ngOnInit() {

    this.updatecardservice.currentnotes.subscribe(message => this.allnotes = message);
    this.updatelabelsService.currentlabels.subscribe(labels=>this.alllabels)
  }
}

