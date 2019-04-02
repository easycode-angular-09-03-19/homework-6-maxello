import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Message } from 'primeng/components/common/api';

@Injectable({
  providedIn: 'root'
})
export class MessageEventsService {

  private messageSource = new BehaviorSubject({});
  public  messageObservableSubject = this.messageSource.asObservable();

  emitMessage(value: Message) {
    this.messageSource.next(value);
  }

  constructor() { }
}
