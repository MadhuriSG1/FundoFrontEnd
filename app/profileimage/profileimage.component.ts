import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCropperModule } from 'ngx-image-cropper';

@Component({
  selector: 'app-profileimage',
  templateUrl: './profileimage.component.html',
  styleUrls: ['./profileimage.component.css']
})
export class ProfileimageComponent implements OnInit {
  imageChangedEvent:any='';
  cropImage;
  constructor(public dialogRef:MatDialogRef<ProfileimageComponent>) { }
  

  ngOnInit() {}
  fileChangeEvent(event:any):void
  {
    this.imageChangedEvent=event;
 
  }

  imageCropped(event:any)
  {
    console.log(event);
    this.cropImage=event;
  }
  selectProfileImage()
  {
    if(this.cropImage!=null)
    {
      this.dialogRef.close(this.cropImage);
    }

  }

}

// imageChangedEvent: any = '';
//   croppedImage;

//   constructor(public dialogRef: MatDialogRef<ProfilepicComponent>) { }

//   ngOnInit() { }

//   fileChangeEvent(event: any): void {
//     this.imageChangedEvent = event;
//   }

//   imageCropped(event:any) {
//   console.log(event);
//   this.croppedImage = event;
//   }
   
//   setProfile()
//   {
//     if(this.croppedImage!=null)
//     {
//       this.dialogRef.close(this.croppedImage);
//     }
// }