import { Injectable } from '@angular/core';
import { NotecrudService } from './notecrud.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatecardsService {

  
  private allNotes=new BehaviorSubject([]);
  currentnotes=this.allNotes.asObservable();

  constructor(private notecrud:NotecrudService) {
    
    this.notecrud.getNotes().subscribe(
      response =>{
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
   
  changemessage()
  {
    this.notecrud.getNotes().subscribe(
      response=>{
  
        this.allNotes.next(response);
      },
      error =>{  
       console.log(error);
      }
    )          
  }

}
