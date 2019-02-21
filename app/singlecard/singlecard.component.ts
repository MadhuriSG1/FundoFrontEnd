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
  @Input() notedetails: CreateNoteModel;
  @Input() notedetails1:TotalNote;

 
  private labelsall: Label[];
  private allnotes: CreateNoteModel[];

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
    this.notecrudservice.deleteNote(this.notedetails).subscribe(
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
      data: { notedetails: this.notedetails }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.notedetails = result;
      console.log(this.notedetails);
      this.notecrudservice.updateNote(this.notedetails).subscribe(
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
    this.notedetails.color = single;
    this.notecrudservice.updateNote(this.notedetails).subscribe(
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
    this.notedetails.isTrash = true;
    //this.notedetails.isPin=false;

    this.notecrudservice.updateNote(this.notedetails).subscribe(
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
    this.notedetails.isTrash = false;
    this.notecrudservice.updateNote(this.notedetails).subscribe(
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
    this.notedetails.isPin = !this.notedetails.isPin;
    if (this.notedetails.isPin) {
      this.notedetails.isArchive = false;
    }
    this.notecrudservice.updateNote(this.notedetails).subscribe(
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
    this.notedetails.isArchive = !this.notedetails.isArchive;
    if (this.notedetails.isArchive) {
      this.notedetails.isPin = false;
    }
    this.notecrudservice.updateNote(this.notedetails).subscribe(
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

