import { AuthService } from './../../shared/services/auth.service';
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

  authenticated$ :Observable<boolean>;

  constructor(private cartService: CartService,
              private authService: AuthService) {
    this.amount$ = this.cartService.amount$;
    this.count$ = this.cartService.count$;

    this.authenticated$ = this.authService.authenticated$;
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
