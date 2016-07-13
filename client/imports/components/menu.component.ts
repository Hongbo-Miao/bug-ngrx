import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'menu-component',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div>
      <ul>
        <li linkActive="active">
          <a [routerLink]="['/home']">Home</a>
        </li>
        <li linkActive="active">
          <a [routerLink]="['/test']">Test</a>
        </li>
      </ul>
    </div>
  `
})
export class MenuComponent {}
