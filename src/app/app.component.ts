import { Component } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageEventsService } from './services/message-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework6';
  timeout: ReturnType<typeof setTimeout>;
  msgs: Message[] = [];

  constructor(
    private messageEvents: MessageEventsService
  ) { }

  ngOnInit() {
    this.messageEvents.messageObservableSubject.subscribe((value: Message) => {
      if (value.summary) {
        clearTimeout(this.timeout);
        this.msgs = [];
        this.msgs.push(value);
        this.timeout = setTimeout(() => {
          this.msgs = [];
        }, 2000);
      }
    });
  }
}
