import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'test-component',
  template: `
    <button (click)="onDispatch()">Dispatch</button>
    {{_store|async|json}}
  `
})
export class TestComponent {
  constructor(private _store: Store<any>) {}

  onDispatch() {
    this._store.dispatch({ type: 'CAN_BE_ANYTHING' });
  }
}
