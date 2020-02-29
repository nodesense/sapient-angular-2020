import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  amount: number;
  count: number;

  constructor(private cartService: CartService) {
    console.log('CartSummary created');

    // fixed with BehaviourSubject
   // this.amount = this.cartService.amount;
   // this.count = this.cartService.count;
   }

  ngOnInit() {
    //susbcribe for amount$ changes
    this.cartService
        .amount$
        .subscribe ( (value:number) => {
          console.log('summary amount subscriber ', value);
          this.amount = value;
        });

    this.cartService
        .count$
        .subscribe( (value: number) => {
          console.log('summary count subscriber ', value);
          this.count = value;
        });
  }

}
