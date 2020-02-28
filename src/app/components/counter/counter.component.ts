import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(e: Event) {
    console.log("Event ", e);
    console.trace(); // don't use it
    this.counter++;
  }

}
