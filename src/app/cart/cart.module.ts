import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    CartComponent,
    CartListComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent
  ],
  providers: [ // ng 2, 4, 5
    // for ng 6 onwards, not needed
    CartService
  ]
})
export class CartModule { }
