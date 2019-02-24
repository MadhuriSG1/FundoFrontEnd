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

  private labelsall: Label[];
  private allnotes: TotalNote[];

  private colors: string[][] = [["white", "salmon", "orange", "yellow"], ["green", "teal", "blue", "CadetBlue"],
  ["Peru", "turquoise", "olive", "gray"]];


  ngOnInit() {
    this.notecrudservice.getAllLabels().subscribe(
      response => {
        this.labelsall = response;

      }
    )
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
      height:'200px',
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



  //  lncheck(x,y)
  // {
  //   console.log(x);
  //   console.log(y);
  // }

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



}

