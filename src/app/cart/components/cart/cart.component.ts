import { CartItem } from './../../models/cart-item';
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

  addItem() {
    const id = Math.ceil(Math.random() * 100000);
    const cartItem = new CartItem();
    cartItem.id = id;
    cartItem.name = `Product ${id}`;
    cartItem.price = Math.ceil(Math.random()*1000);
    cartItem.qty = 1;

    this.cartService.addItem(cartItem);
  }

  clear() {
    this.cartService.empty();
  }

}
