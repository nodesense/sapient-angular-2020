import {Component, OnInit} from '@angular/core';

// MVW - Model View Whatever

@Component({
    // meta
    selector: 'app-root',
    // view/html
    templateUrl: 'app.component.html', 
    // scopped styles
    styleUrls: [
        'app.component.scss'
    ]
})
export class AppComponent implements OnInit {
    // model attributes
    // bindable to view
    appTitle: string = "Product App";

    constructor() {
        console.log('App comp constructor');
    }

    // callback, called by framework after loading view into browser
    ngOnInit() {
        console.log('app component ngOnInit');
    }
}
