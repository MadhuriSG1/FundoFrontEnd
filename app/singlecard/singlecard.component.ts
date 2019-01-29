import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  constructor(private notecrudservice:NotecrudService,private snackBar: MatSnackBar) { }
  
  @Input() notedetails:CreateNoteModel;

  ngOnInit() {
}
noteDelete()
{
  this.notecrudservice.deleteNote(this.notedetails).subscribe(
    response =>{
      if(response.statusCode==200)
      {
        this.snackBar.open(response.statusMessage,"",{
          duration:2000,
        })
      }

    },
    error =>{
      console.log("Error",error);
    } 
);
}
}
