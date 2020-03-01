import { Editable } from './../../models/editable';
import { ProductService } from './../../services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit,
         ViewChild,
         ElementRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';


import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, Editable {
  // @ViewChild is available on ngOnInit

  @ViewChild("productForm", {static: true})
  form: NgForm; // directive instance

  @ViewChild("productName", {static: true})
  nameElement: ElementRef; // Wrapper for DOM element

  product: Product = new Product(); // for create
  brands$: Observable<Brand[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    // set focus on input element
    // nativeElement is DOM element,
    // here input tag, which has focus method
    this.nameElement.nativeElement.focus();

    // path: 'edit/:id'
    const id = this.route.snapshot.params['id'];

    // matrix url data ;source:list
    const source = this.route.snapshot.params['source'];
    console.log('source', source);

    if (id) {
      console.log('edit product ', id)
      this.productService
          .getProduct(id)
          .subscribe( product => {
            this.product = product;
          });
    } else {
      console.log('create new product');
    }

    this.brands$ = this.productService.getBrands();

  }

  save() {
    console.log('product details', this.product);

    if (this.form.pristine) {
      alert('Form is not changed, not saving..');
      return;
    }

    this.productService
        .saveProduct(this.product)
        .subscribe ( savedProduct => {
           console.log('saved Product ', savedProduct);
           this.product = savedProduct;

           this.form.reset(this.product); // clear the dirty state

           this.router.navigate(['/', 'products', {source: 'edit'}])
        })
  }

  isSaved(): boolean {
    return this.form.pristine;
  }

}
