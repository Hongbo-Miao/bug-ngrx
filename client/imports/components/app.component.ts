import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MenuComponent } from './menu.component';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  template: `
    <menu-component></menu-component>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
