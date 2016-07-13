import { Injectable } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends MeteorComponent {

  constructor() {
    super();
  }

  load(): Observable<string> {
    return Observable.create(observer => {
      observer.next('hello');
    });
  }
}
