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

  constructor() {
    this._notificationsInput = new Subject<NotificationCommand>();
    this.notificationsOutput$ = this._notificationsInput.pipe(
      tap((res) => console.log(res)),

      //SCAN HOLDS A STATE OF NOTIFICATIONS
      scan((acc: NotificationCommand[], val: NotificationCommand) => {
        if (val.type === 'clear') {
          acc.filter((message) => message.id !== val.id);
        } else {
          return [...acc, val];
        }
      }, [])
    );
  }


  /**
   * Sends in a command into the observable pipeline that then tracks and holds a state of messages
   * @param command a command object to be emitted into the observable in the form of Notification Command
   * 
   */
  sendCommand(command: NotificationCommand) {
    this._notificationsInput.next(command);
  }
}
