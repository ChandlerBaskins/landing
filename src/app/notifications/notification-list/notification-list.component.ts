import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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
  messages: BehaviorSubject<NotificationCommand>;
  constructor(private notificationsService: NotificationsService) {
    this.messages = notificationsService.notifications$;
    notificationsService.addMessage({
      type: 'success',
      id: 1,
      timeStamp: new Date(),
      message: 'test in constructor',
    });
  }

  add() {
    this.notificationsService.addMessage({
      type: 'success',
      id: 2,
      timeStamp: new Date(),
      message: 'test in method',
    });
  }

  ngOnInit(): void {}
}
