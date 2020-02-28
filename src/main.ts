import { AppModule } from './app/app.module';
// load the app module into browser
// bootstrap

import {platformBrowserDynamic} 
    from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
                .bootstrapModule(AppModule);
