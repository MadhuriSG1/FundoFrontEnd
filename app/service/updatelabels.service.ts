import { Injectable } from '@angular/core';
import { NotecrudService } from './notecrud.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatelabelsService {
  private allLabels=new BehaviorSubject([]);
  currentlabels=this.allLabels.asObservable();

  constructor(private notecrud:NotecrudService) { 
    this.notecrud.getAllLabels().subscribe(
      response =>{
        this.allLabels.next(response);
      },
      error=>
      {
        console.log(error);
      }
    );
  }

  changemessagelabel()
  {
    this.notecrud.getAllLabels().subscribe(
      response=>{
  
       this.allLabels.next(response);
      },
      error =>{  
       console.log(error);
      }
    )  
            
  }
}
