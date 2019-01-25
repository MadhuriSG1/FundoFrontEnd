import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {
  navshow:boolean=false;
 createnote:CreateNoteModel=new CreateNoteModel();
  constructor() { }

  ngOnInit() {
  }
  fullCardShow()
  {
   this.navshow=!this.navshow;
  }
}
