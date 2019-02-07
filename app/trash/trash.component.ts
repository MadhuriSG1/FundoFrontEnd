import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { UpdatecardsService } from '../service/updatecards.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

 
  private  allnotes:CreateNoteModel[];

  constructor(private cradupdate:UpdatecardsService) { 
    this.cradupdate.changemessage('true','false');
  }

  ngOnInit() {
    this.cradupdate.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes);
}

}
