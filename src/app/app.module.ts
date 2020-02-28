import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
 // module is logical colleciton of
// components, directives, pipes, services
// dependencies to other modules

import {NgModule} from '@angular/core';

import {BrowserModule} 
        from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {FormsModule} from '@angular/forms';


@NgModule({
    // meta data about module
    imports: [
        BrowserModule,
        SharedModule,
        FormsModule,
        CartModule
    ],

    declarations: [
        // components, pipes, directives
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        CounterComponent,
        HeaderComponent,
        FooterComponent,
        // HeaderComponent,
        //Footer, Home, etc
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}