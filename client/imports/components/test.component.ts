import { Component, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'test-component',
  template: `
    <button (click)="onChangeDetaction()">Change Detection</button>
    <button (click)="onDispatch()">Dispatch</button>
    {{_store|async|json}}
  `
})
export class TestComponent {
  constructor(
    private _store: Store<any>,
    private _cdRef: ChangeDetectorRef,
    private _appRef: ApplicationRef) {}

  onChangeDetaction() {
    this._cdRef.detectChanges();
    this._cdRef.markForCheck();
    this._appRef.tick();
  }

  onDispatch() {
    this._store.dispatch({ type: 'NOT_EXIST' });
  }
}
