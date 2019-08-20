import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularStarterElement } from '../../angular-starter-lib/src/lib/angular-starter-component/angular-starter.element';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// for using regular angular components
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


// for angular elements
customElements.define('angular-starter', AngularStarterElement);
