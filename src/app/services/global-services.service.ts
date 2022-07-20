import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

  constructor() { }

  private _listeners = new Subject<any>();
  listen(): Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy: string){
    this._listeners.next(filterBy);
  }
}
