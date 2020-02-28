import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService: CartService) {
    console.log('CartSummary created');
   }

  ngOnInit() {
  }

}
