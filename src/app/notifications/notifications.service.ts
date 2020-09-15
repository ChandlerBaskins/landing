import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export interface NotificationCommand {
  message?: string;
  type: 'success' | 'error' | 'clear';
  id: number;
  timeStamp: Date;
}
@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notifications$: BehaviorSubject<NotificationCommand>;
  constructor() {
    this.notifications$ = new BehaviorSubject<NotificationCommand>(null);
  }

  addMessage(command:NotificationCommand) {
    this.notifications$.next(command)
  }
}
