import { Component, OnInit } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { MatSnackBar } from '@angular/material';
import { UpdatecardsService } from '../service/updatecards.service';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {

  navshow: boolean = false;
  createnote: CreateNoteModel = new CreateNoteModel;

  constructor(private notecrudservice: NotecrudService, private snackBar: MatSnackBar,
    private updatecardsService:UpdatecardsService) { }

  ngOnInit() {
  }

  fullCardShow() {
    this.navshow = !this.navshow;
  }
  noteSave() {
    this.navshow = !this.navshow;
    this.createnote.isPin = false;
    // this.createnote.userid=20;
    this.notecrudservice.createNote(this.createnote).subscribe(
      response => {
        console.log(response);
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,
          })
          this.updatecardsService.changemessage2();
        }

      },
      error => {
        console.log("Error", error);
      }
    );
  
  }

}
