import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import {Subject, BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartItems: CartItem[] = [];
  private _amount = 0; // total amount
  private _count = 0; // total items in cart

  amount$: BehaviorSubject<number> = new BehaviorSubject(this._amount);
  count$: BehaviorSubject<number> = new BehaviorSubject(this._count);

  //sessionStorage per tab, remain until tab is opened
  // localStorage for the speicifc browser, always persistent
  // until the browser clean, removeItem, clear apis called
  // storage: Storage = window.sessionStorage;
  storage: Storage = window.localStorage;

  get cartItems() {
    return this._cartItems;
  }

  set cartItems(items: CartItem[]) {
    this._cartItems = items;
  }

  get count() {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
    console.log('count is ', value);
    this.count$.next(this._count);
  }

  get amount() {
    return this._amount;
  }

  set amount (value: number) {
    this._amount = value;
    console.log('amount is ', value);
    // publishing the values to subscriber
    this.amount$.next(this._amount);
  }

  constructor() {
    console.log('CartService created');

    const strData = this.storage.getItem("cartItems");
    if (strData) {
       //FIXME: Array of Object to Array of CartItem
       this._cartItems = JSON.parse(strData);
    }
 
    window.onstorage = () => {
      // When local storage changes, dump the list to
      // the console.
      console.log('storage got changed ');

      const strData = this.storage.getItem("cartItems");
      if (strData) {
         //FIXME: Array of Object to Array of CartItem
         this._cartItems = JSON.parse(strData);
      }
    };

   }

   calculate(): void {
     let amount = 0; // local function variables
     let count = 0;

     for (let cartItem of this._cartItems) {
       amount += cartItem.price * cartItem.qty;
       count += cartItem.qty;
     }

     // setter and set values
     this.amount = amount;
     this.count = count;
   }

   addItem(cartItem: CartItem) {
     this._cartItems.push(cartItem);
     this.calculate();

     this.storage.setItem("cartItems", 
                          JSON.stringify(this._cartItems));
   }

   removeItem(id: number) {
     const index = this._cartItems
                       .findIndex(item => item.id === id);

     this._cartItems.splice(index, 1);
     this.calculate();

     this.storage.setItem("cartItems", 
                          JSON.stringify(this._cartItems));
   }

   empty() {
     this._cartItems.splice(0, this._cartItems.length);
     
     this.calculate();

     this.storage.removeItem("cartItems");
   }


}
