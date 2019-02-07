import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { UpdatecardsService } from '../service/updatecards.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  private  allnotes:CreateNoteModel[];
  haspinned;
  hasunpinned;
  constructor(private updatecards:UpdatecardsService) { 
    this.updatecards.changemessage('false','true');
  }

  ngOnInit() {
    
    this.updatecards.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes
      );
}

}
