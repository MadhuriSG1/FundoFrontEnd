import { Injectable } from '@angular/core';
import { NotecrudService } from './notecrud.service';
import { BehaviorSubject,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatecardsService {

  
  private allNotes=new BehaviorSubject([]);
  currentnotes=this.allNotes.asObservable();
  private isTrash='false';
  private isArchive='false';

  constructor(private notecrud:NotecrudService) {
    
    
    this.notecrud.getNotes(this.isTrash,this.isArchive).subscribe(
      response =>{
        console.log(response);
        this.allNotes.next(response);
      },
      error=>
      {
        console.log(error);
      }
    );
   }

   
   ngOnInit():void {
    
   }
   
  changemessage(isTrash:string,isArchive:string)
  {
    this.isTrash=isTrash;
    this.isArchive=isArchive;
    this.notecrud.getNotes(isTrash,isArchive).subscribe(
      response=>{
  
        this.allNotes.next(response);
      },
      error =>{  
       console.log(error);
      }
    )          
  }
  changemessage2()
  {
    this.notecrud.getNotes(this.isTrash,this.isArchive).subscribe(
      response=>{
        this.allNotes.next(response);
      },
      error =>{  
       console.log(error);
      }
    )          
  }

}


