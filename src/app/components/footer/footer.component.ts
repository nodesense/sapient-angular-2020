import { HighlightDirective } from './../../shared/directives/highlight.directive';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // <app-footer company="Sapient"

  @Input("company") // alias name for property binding
  appCompany: string; 

  @ViewChild('myHighlight', {static: true})
  highlight: HighlightDirective

  today: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit", this.highlight.color)
  }

  raise() {
    throw new Error('Crash');
  }

}
