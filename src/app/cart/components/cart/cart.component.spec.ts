import { SharedModule } from './../../../shared/shared.module';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { CartListComponent } from './../cart-list/cart-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    localStorage.clear();

    TestBed.configureTestingModule({
      declarations: [ 
        CartComponent ,
        CartListComponent,
        CartSummaryComponent
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.addItem();
    fixture.detectChanges();  

    const element: any = fixture.nativeElement;
    expect(element.querySelectorAll('tr').length)
                                      .toBe(2);
    

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
