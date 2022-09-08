import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  
  monMessage:string="" 
  constructor() { }

  ngOnInit(): void {
    this.monMessage = "hello"
  }
  
  
}
