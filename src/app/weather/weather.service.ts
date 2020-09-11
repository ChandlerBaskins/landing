import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  forecast = this.getCurrentLocation().pipe(map((val) => val.accuracy));
  getCurrentLocation() {
    return new Observable<Coordinates>((subscriber) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          subscriber.next(position.coords);
          subscriber.complete();
        },
        (err) => subscriber.error(err)
      );
    }).pipe(tap((res) => console.log(res)));
  }
  constructor() {}
}
