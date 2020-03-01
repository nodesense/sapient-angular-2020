import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CartItem } from './../../../cart/models/cart-item';
import { Observable, Subscription } from 'rxjs';
import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import {of} from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  fieldName: string;
  operator: string;
  expectedValue: number;

  products$ : Observable<Product[]>;
  //products: Product[];
  // subscription: Subscription;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              ) { 
                console.log(this.activatedRoute.snapshot.data);
                let products:Product[] = this.activatedRoute.snapshot.data.products;
                // let roles = this.activatedRoute.snapshot.data.roles;
                this.products$ = of(products);
              }


  ngOnInit() {
     this.products$ = this.productService.getProducts();
      
  }

  // ngOnInit() {
  //    //this.products$ = this.productService.getProducts();
  //    this.subscription = this.productService.getProducts()
  //    .subscribe( products => {
  //      this.products = products;
  //    });
  // }

   ngOnDestroy() {
      //     this.subscription.unsubscribe();
   }

   addToCart(product: Product) {
     const cartItem: CartItem = new CartItem();
     cartItem.id = product.id;
     cartItem.name = product.name;
     cartItem.price = product.price;
     cartItem.qty = 1;
     
     this.cartService.addItem(cartItem);
   }

   //FIXME:
   productTrackBy(index: number, product:Product) {
     console.log("Product ", product);
     return product.id;
   }

   deleteProduct(id: number) {
     this.productService
         .deleteProduct(id)
         .subscribe( obj => {
           console.log('deleted successfully');
           // get new list
           this.products$ = this.productService.getProducts();
         })
   }

}
