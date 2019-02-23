import { Component, OnInit } from '@angular/core';
import { NotecrudService } from '../service/notecrud.service';
import { Label } from '../Model/label.model';
import { CreateNoteModel } from '../Model/createnote.model';
import { UpdatecardsService } from '../service/updatecards.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ViewchangeService } from '../service/viewchange.service';
import { TotalNote } from '../Model/totalnote.model';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  private  allnotes:TotalNote[];
  labelvalue:string; 
  private currentView:boolean;
  constructor(private updatecardservice:UpdatecardsService,private router:Router,
    private activeRoute: ActivatedRoute,private viewchangeService:ViewchangeService) { 
    
  }

  ngOnInit() {

    this.labelvalue = this.activeRoute.snapshot.params['labelvalue'];

    this.updatecardservice.currentnotes.subscribe(udnotes => {
      this.allnotes = udnotes
    });

    this.viewchangeService.currentView.subscribe(view=>
      this.currentView=view
      
    );

    //This Is will Update filter (labelvalue ) over child route
    this.router.events.subscribe((e: any) => {
      this.labelvalue = this.activeRoute.snapshot.params['labelvalue'];

    });
  }

  labelcheck(label: Label) {
    if (label.labelTitle == this.labelvalue) {
      return true
    }
    else {
      return false;
    }
  }

}
