import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  NotificationsService,
  NotificationCommand,
} from '../notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  messages$: Observable<NotificationCommand[]>;
  counter = 1
  constructor(private notificationsService: NotificationsService) {
    this.messages$ = this.notificationsService.notificationsOutput$
    // notificationsService.addMessage({
    //   type: 'success',
    //   id: 1,
    //   timeStamp: new Date(),
    //   message: 'test in constructor',
    // });
  }

  addClear() {
    this.notificationsService.sendCommand({
      type: 'clear',
      id: this.counter,
      timeStamp: new Date(),
      message: 'clear',
    });
    this.counter++
  }

  ngOnInit(): void {}
}
