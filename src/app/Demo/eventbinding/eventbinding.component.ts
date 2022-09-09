import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html'
})
export class EventbindingComponent implements OnInit {

  nombre : number = 0
  message : string = ""
  keyPressed : any = undefined

  constructor() { }

  ngOnInit(): void {
  }

  incrementNumber(){
    this.nombre++
  }


  chippoteEvent(event : KeyboardEvent, monMessage : string){
    console.log(event.key)
    this.message = event.key
    
  }
}
