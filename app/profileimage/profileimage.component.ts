import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageCropperModule, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profileimage',
  templateUrl: './profileimage.component.html',
  styleUrls: ['./profileimage.component.css']
})
export class ProfileimageComponent implements OnInit {
  imageChangedEvent:any='';
  croppedImage: any = '';
  constructor(public dialogRef:MatDialogRef<ProfileimageComponent>) { }
  

  ngOnInit() {}
  
  fileChangeEvent(event: any): void 
  {
         this.imageChangedEvent = event;
  }

  imageCropped(event:ImageCroppedEvent)
  {
    console.log(event);
    this.croppedImage=event.base64;
  }
  
  selectProfileImage()
  {
    if(this.croppedImage!=null)
    {
      this.dialogRef.close(this.croppedImage);
    }

  }

}

