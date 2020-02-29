import { CartService } from './../../services/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit, OnDestroy {

  amount: number;
  count: number;

  amountSubscription: Subscription;
  countSubscription: Subscription;

  constructor(private cartService: CartService) {
    console.log('CartSummary created');

    // fixed with BehaviourSubject
   // this.amount = this.cartService.amount;
   // this.count = this.cartService.count;
   }

  ngOnInit() {
    //susbcribe for amount$ changes
    this.amountSubscription = this.cartService
        .amount$
        .subscribe ( (value:number) => {
          console.log('summary amount subscriber ', value, Math.random());
          this.amount = value;
        });

    this.countSubscription = this.cartService
        .count$
        .subscribe( (value: number) => {
          console.log('summary count subscriber ', value);
          this.count = value;
        });
  }

  ngOnDestroy() {
    console.log('Cart Summary ngOnDestroy');

    this.amountSubscription.unsubscribe();
    this.countSubscription.unsubscribe();
  }

}
