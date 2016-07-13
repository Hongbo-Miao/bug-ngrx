import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from '../components/home.component';
import { TestComponent } from '../components/test.component';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },

  { path: '**', redirectTo: 'test' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
