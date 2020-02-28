import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headOffice: Address = {
                          city: 'BLR',
                          state: 'KA',
                          pincode: 560001
                        }

  branchOffice: Address = {
                          city: 'Noida',
                          state: 'UP',
                          pincode: 110096
                        }

  constructor() { }

  ngOnInit() {
  }

  contactHandler(address: Address) {
    console.log('address to contact', address);
    alert(JSON.stringify(address));
  }

}
