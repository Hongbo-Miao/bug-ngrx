import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService  {

  load(): Observable<string> {
    return Observable.create(observer => {
      observer.next('hello');
    });
  }
}
