import { Address } from './../../models/address';
import { Component, OnInit, 
        Input,
        Output, EventEmitter
      } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  // parent to child using Input
  // Input is for property binding
  // [address]="headOffice"

  @Input()
  address: Address;

  // Output & Event -> Child to parent
  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  contact() {
    // trigger an event, 
    // subscribed by parent component
    // (contactEvent)="expr", 
    // the value passed in event, received as $event
    this.contactEvent.emit(this.address);
  }

}
