import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'weather',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  userLocation$ = new Observable<Coordinates>((subscriber) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        subscriber.next(position.coords);
        subscriber.complete();
      },
      (err) => subscriber.error(err)
    );
  });

  constructor() {}

  ngOnInit(): void {}
}
