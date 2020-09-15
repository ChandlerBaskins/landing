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
  messages: Observable<NotificationCommand[]>;
  counter = 1
  constructor(private notificationsService: NotificationsService) {
    this.messages = this.notificationsService.notificationsOutput$
    // notificationsService.addMessage({
    //   type: 'success',
    //   id: 1,
    //   timeStamp: new Date(),
    //   message: 'test in constructor',
    // });
  }

  add() {
    this.notificationsService.addMessage({
      type: 'success',
      id: this.counter,
      timeStamp: new Date(),
      message: 'test in method',
    });
    this.counter++
  }

  ngOnInit(): void {}
}
