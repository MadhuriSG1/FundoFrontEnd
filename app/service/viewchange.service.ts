import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewchangeService {
  private view=new BehaviorSubject(true);
  currentView=this.view.asObservable();
  private views;


  constructor() { }
  onViewChange()
  {
    this.currentView.subscribe(
      response=>
      {
      this.views=response;
      }
    )
    this.view.next(!this.views);
  }
}













// private view=new BehaviorSubject(true);
// currentView=this.view.asObservable();
// private xyz;
// constructor() { }


// ngOnInit():void{

// }

// onViewChange():void{
  
//   this.currentView.subscribe(
//     response =>
//     {
//       this.xyz=response;
//     }
//   )
//   this.view.next(!this.xyz);
// }