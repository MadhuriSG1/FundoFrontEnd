import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//   @Output() eventClicked = new EventEmitter<boolean>();
  
// open:boolean=false;

  constructor() { }

  ngOnInit() {
  }


// onClick(){
//    this.open=!this.open;
//     this.eventClicked.emit(this.open);
    
//  }
}
