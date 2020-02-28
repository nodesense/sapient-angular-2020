import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';

@NgModule({
  declarations: [
    // private to local module
    AddressComponent,
    LikeComponent,
    // private component ....N
  ],
  imports: [
    CommonModule
  ],

  exports: [
    // make the component, directive, pipes
    // to other module as public
    AddressComponent,
    LikeComponent
  ]
})
export class SharedModule { }
