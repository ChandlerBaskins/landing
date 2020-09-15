import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, scan, tap } from 'rxjs/operators';
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
  private _notificationsInput: Subject<NotificationCommand>;
  notificationsOutput$: Observable<NotificationCommand[]>;
  private messages = new BehaviorSubject<NotificationCommand[]>([]);

  constructor() {
    this._notificationsInput = new Subject<NotificationCommand>();
    this.notificationsOutput$ = this._notificationsInput.pipe(
      tap((res) => console.log(res)),
      scan((acc: NotificationCommand[], val: NotificationCommand) => {
        if (val.type === 'clear') {
          acc.filter((message) => message.id !== val.id);
        } else {
          return [...acc, val];
        }
      }, [])
    );
  }

  addMessage(command: NotificationCommand) {
    //console.log(command);
    this._notificationsInput.next(command);
  }
}
