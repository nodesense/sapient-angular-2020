import { CartService } from './../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count$: Observable<number>;
  amount$: Observable<number>;

  constructor(private cartService: CartService) {
    this.amount$ = this.cartService.amount$;
    this.count$ = this.cartService.count$;
   }

  ngOnInit() {
  }

}
