import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { UpdatecardsService } from '../service/updatecards.service';
import { ViewchangeService } from '../service/viewchange.service';
import { TotalNote } from '../Model/totalnote.model';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

 
  private  allnotes:TotalNote[];
  private currentView:boolean;

  constructor(private cradupdate:UpdatecardsService,private viewchangeService:ViewchangeService) { 
    this.cradupdate.changemessage('true','false');
  }

  ngOnInit() {
    this.cradupdate.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes);
      this.viewchangeService.currentView.subscribe(view=>
        {
          this.currentView=view
        }
        );
}

}
