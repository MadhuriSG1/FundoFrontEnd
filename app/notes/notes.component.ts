import { Component, OnInit } from '@angular/core';
import { NotecrudService } from '../service/notecrud.service';
import { UpdatecardsService } from '../service/updatecards.service';
import { UpdatelabelsService } from '../service/updatelabels.service';
import { Label } from '../Model/label.model';
import { ViewchangeService } from '../service/viewchange.service';
import { TotalNote } from '../Model/totalnote.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private allnotes: TotalNote[];
  private alllabels: Label[];
  private isPin='false';
  private currentView:boolean;
  

  showtoolbar = false;
  constructor(private updatecardservice:UpdatecardsService,private updatelabelsService:UpdatelabelsService,
    private viewchangeservice:ViewchangeService ) {
    this.updatecardservice.changemessage('false','false');
    this.updatelabelsService.changemessagelabel();
   }

  ngOnInit() {

    this.updatecardservice.currentnotes.subscribe(message => this.allnotes = message);
    this.updatelabelsService.currentlabels.subscribe(labels=>this.alllabels=labels);
    this.viewchangeservice.currentView.subscribe(view=>
      {
        this.currentView=view
      }
      );
  }
}

