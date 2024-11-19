import { Component, EventEmitter, Output,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // First part
  // @Output() public sendEvent=new EventEmitter()

  // public sendMessage(mssg:any){
  //   this.sendEvent.emit(mssg)
  // }

  //Second part
  // @Input() public parentsMsg:any

  // @Output() public sendEvent=new EventEmitter()
  // public sendMsg(){
  //   this.sendEvent.emit("Hello from Child")
  // }  
}
