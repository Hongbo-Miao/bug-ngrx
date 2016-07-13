import { provideStore, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { runEffects } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { APP_ROUTER_PROVIDERS } from './imports/routers/app.routes';
import { UserService } from './imports/services/user.service';
import { UserEffects } from './imports/effects/user.effects';
import { userReducer } from './imports/reducers/user.reducer';
import { AppComponent } from './imports/components/app.component';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,

  UserService,

  provideStore(
    compose(
      storeLogger({
        collapsed: true,
        duration: false,
        timestamp: false
      }),
      combineReducers
    )({
      user: userReducer
    })
  ),
  runEffects(
    UserEffects
  )
]);
