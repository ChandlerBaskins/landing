import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable, Subscription } from 'rxjs';
import { Forecast } from '../models/OpenWeatherResponse';
import { map } from 'rxjs/operators';

@Component({
  selector: 'weather',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  forecast$: Observable<Forecast[]>;
  weatherTitle$: Observable<string>;
  constructor(private weatherService: WeatherService) {
    this.forecast$ = this.weatherService.forecast$;
    this.weatherTitle$ = this.forecast$.pipe(map((val) => val[0].city.name));
  }

  ngOnInit(): void {}
}
