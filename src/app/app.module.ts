import { AuthGuard } from './shared/guards/auth.guard';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
 // module is logical colleciton of
// components, directives, pipes, services
// dependencies to other modules

import {NgModule, ErrorHandler} from '@angular/core';

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

import { RouterModule, Route, CanActivate } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { ProductRoutingModule } from './product/product-routing.module';


import {LocationStrategy, 
        HashLocationStrategy,
        PathLocationStrategy // default
    } from '@angular/common';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorHandlerService } from './services/error-handler.service';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { GridComponent } from './components/grid/grid.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { HostTemplateDirective } from './directives/host-template.directive';


// 1. configuration
const routes: Route[] = [
    // map the path to component
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'products',
        loadChildren: './product/product-routing.module#ProductRoutingModule',
        canActivate: [AuthGuard]
    }, 
    {
        path: 'counter',
        component: CounterComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    // at last
    {
        path: '**',
        component: NotFoundComponent
    }
];


@NgModule({
    // meta data about module
    imports: [
        BrowserModule,
        HttpClientModule, 
        SharedModule,
        FormsModule,
        CartModule,
       // ProductRoutingModule,
        
        // 2. apply the configuration
        // root/app/main module
        RouterModule.forRoot(routes)
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
        NotFoundComponent,
        LoginComponent,
        GridComponent,
        TableComponent,
        ListComponent,
        HostTemplateDirective,
        // HeaderComponent,
        //Footer, Home, etc
    ],

    providers: [
        // {
        //     provide: LocationStrategy,
        //     useClass: HashLocationStrategy
        // }

        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService
        },

        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
          }

    ], 

    entryComponents: [
        TableComponent,
        GridComponent,
        ListComponent
    ],
    
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}