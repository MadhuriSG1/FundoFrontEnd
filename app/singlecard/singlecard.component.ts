import { Component, OnInit, Input } from '@angular/core';
import { CreateNoteModel } from '../Model/createnote.model';
import { TotalNote } from '../Model/totalnote.model';
import { NotecrudService } from '../service/notecrud.service';
import { MatSnackBar } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { UpdatecardsService } from '../service/updatecards.service';
import { Label } from '../Model/label.model';
import { MatChipsModule } from '@angular/material/chips';
import { ColabdialogComponent } from '../colabdialog/colabdialog.component';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';



@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  constructor(private notecrudservice: NotecrudService, private snackBar:
    MatSnackBar, private dialog: MatDialog, private updatecardservice: UpdatecardsService) {

  }
  
  @Input() notedetails:TotalNote;
  public dateTime=new FormControl;
  d:Date;
  private imageget:boolean=true;

  private labelsall: Label[];
  private allnotes: TotalNote[];

  private colors: string[][] = [["white", "salmon", "orange", "yellow"], ["green", "teal", "blue", "CadetBlue"],
  ["Peru", "turquoise", "olive", "gray"]];
   
  ngOnInit() {

   if(this.notedetails.note.reminder!==null)
   {
     this.d=new Date(this.notedetails.note.reminder);
   }
    this.notecrudservice.getAllLabels().subscribe(
      response => {
        this.labelsall = response;

      }
    );
    
  }
  noteDelete() {
    this.notecrudservice.deleteNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,
          })
          this.updatecardservice.changemessage2();
        }

      },
      error => {
        console.log("Error", error);
      }
    );
  }

  openDialog() {

    const dialogRef = this.dialog.open(MydialogComponent, {
      width: '500px',
      data: { notedetails: this.notedetails.note }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.notedetails.note = result;
      console.log(this.notedetails.note);
      this.notecrudservice.updateNote(this.notedetails.note).subscribe(
        response => {
          if (response.statusCode == 200) {
            this.snackBar.open(response.statusMessage, "", {
              duration: 2000,
            })
          }
          this.updatecardservice.changemessage2();
        },
        error => {
          console.log("Error", error);
        }
      )
    });
  }

  openColabDialog()
  {
    const dialogRef=this.dialog.open(ColabdialogComponent,{
      width:'500px',
      data:{notedetails:this.notedetails}
    });

    dialogRef.afterClosed().subscribe(result=>{
    
     
    });
    
  }


  changeColor(single: string) {
    this.notedetails.note.color = single;
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,
          })
        }
        this.updatecardservice.changemessage('false', 'false');
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  haveThisLabel(label: Label, note: CreateNoteModel) {
    this.notecrudservice.addLabelToNote(note.noteid, label.labelId).subscribe(
      response => {

        console.log(response);
        this.updatecardservice.changemessage2();
      }
    );
  }

  removeThisLabel(label: Label, note: CreateNoteModel) {
    console.log('Removed label from note');
    this.notecrudservice.removelabelfromnote(note.noteid, label.labelId).subscribe(
      response => {
        this.updatecardservice.changemessage2();
      }
    )
  }


  trashnote() {
    this.notedetails.note.isTrash = true;
    //this.notedetails.isPin=false;

    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,

          })

        }
        this.updatecardservice.changemessage2();
      },
      error => {
        console.log("Error", error);
      }
    );

  }
  restore() {
    this.notedetails.note.isTrash = false;
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,

          })

        }
        this.updatecardservice.changemessage2();
      },
      error => {
        console.log("Error", error);
      }
    );
  }


  pinned() {
    this.notedetails.note.isPin = !this.notedetails.note.isPin;
    if (this.notedetails.note.isPin) {
      this.notedetails.note.isArchive = false;
    }
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,

          })
        }
        this.updatecardservice.changemessage2();

      },
      error => {
        console.log("Error", error);
      }
    );

  }

  archivenote() {
    this.notedetails.note.isArchive = !this.notedetails.note.isArchive;
    if (this.notedetails.note.isArchive) {
      this.notedetails.note.isPin = false;
    }
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response => {
        if (response.statusCode == 200) {
          this.snackBar.open(response.statusMessage, "", {
            duration: 2000,
          })
          this.updatecardservice.changemessage2();

        }
      },
      error => {
        console.log("Error", error);
      }
    );

  }

  SetRemainder(event)
  {
    console.log("event "+event);
    let date=new Date(event.value);
    console.log(date);
    this.notedetails.note.reminder=date;
    this.d=new Date(this.notedetails.note.reminder);
    
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response=>
      {
        console.log(response);
      }
    )
  }

  removeRemainder()
  {
    this.notedetails.note.reminder=null;
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response=>
      {
        console.log(response);
        
      }
    );

  }
  setLaterToday()
  {
    const today =  new Date();
    //let time=today.toLocaleTimeString();
    today.setHours(20,0,0);
    let date=new Date(today);
    this.notedetails.note.reminder=date;
 
    this.d=new Date(this.notedetails.note.reminder);
    console.log("ddddddddddd "+this.d);
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response=>
      {
        console.log(response);
      }
    )
  }
  setTomorrow()
  {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setHours(20,0,0);
    tomorrow.setDate(today.getDate()+1);
    let date=new Date(tomorrow);
    this.notedetails.note.reminder=date;
    this.d=new Date(this.notedetails.note.reminder);
    this.notecrudservice.updateNote(this.notedetails.note).subscribe(
      response=>
      {
        console.log(response);
      }
    ) 
  }
  setNextWeek()
  {
      const today =  new Date();
      var day = today.getDay(),
      diff = today.getDate()+7 - day + (day == 0 ? -6 : 1);
      today.setHours(20,0,0);    
      today.setDate(diff);
      this.notedetails.note.reminder=today;
      this.d=new Date(this.notedetails.note.reminder);
      this.notecrudservice.updateNote(this.notedetails.note).subscribe(
        response=>
        {
          console.log(response);
        }
      ) 
    
    
  }

  method()
  {
    console.log('sdf');
  }


}

