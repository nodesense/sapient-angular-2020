import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // dependency injection
  // angular creates instance for CartService
  // inject into component constructor
  constructor(private cartService: CartService) {
    console.log('CartComponent Created');
   }

  ngOnInit() {
  }

}
