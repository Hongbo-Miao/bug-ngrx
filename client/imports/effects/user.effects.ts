import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, StateUpdates } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private updates$: StateUpdates<any>,
    private _userService: UserService
  ) {}

  @Effect() init$ = Observable.of({ type: 'LOAD' });

  @Effect() loadCurrentUser$ = this.updates$
    .whenAction('LOAD')
    .switchMap(() => this._userService.load())
    .filter(x => !!x)
    .map(x => ({ type: 'LOAD_SUCCESS', payload: x }));
}
