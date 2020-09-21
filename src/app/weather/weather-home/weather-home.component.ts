import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BehaviorSubject, EMPTY, Observable, Subscription } from 'rxjs';
import { Forecast } from '../models/OpenWeatherResponse';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'weather',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  forecast$: Observable<Forecast[]>;
  weatherTitle$: Observable<string>;
  errorMessageSubject = new BehaviorSubject<string>(null);
  errorMessage$ = this.errorMessageSubject.asObservable();
  constructor(private weatherService: WeatherService) {
    this.forecast$ = this.weatherService.forecast$.pipe(
      catchError((err:Error) => {
      this.errorMessageSubject.next(err.message)
      return EMPTY
    }));
    this.weatherTitle$ = this.forecast$.pipe(map((val) => val[0].city.name));
  }

  ngOnInit(): void {}
}
