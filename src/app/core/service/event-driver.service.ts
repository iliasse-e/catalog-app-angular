import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {IActionEvent} from "../../shared/product-state";

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {
  private sourceEventSubject: Subject<IActionEvent> = new Subject<IActionEvent>();
  public sourceEventSubject$: Observable<IActionEvent> = this.sourceEventSubject.asObservable();

  constructor() { }

  public publishEvent(event: IActionEvent) {
    this.sourceEventSubject.next(event);
  }
}
