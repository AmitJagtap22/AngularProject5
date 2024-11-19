import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAssignment8';

  // First part
  // public ChildMssg:any;

  // Second part
  // public msgForChild="Hello Child. This message is sent by Parent"
  // public msgFromChild:any

  // Third part
  // public data:string=""

  // public strLen(){
  //   return this.data.length
  // }

  //Fourth part
  public msgLength:number=0
  public calcLen(msg:any){
    this.msgLength=msg.length
    return this.msgLength
  }
}
