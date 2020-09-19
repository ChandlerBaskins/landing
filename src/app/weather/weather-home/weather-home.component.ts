import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable, Subscription } from 'rxjs';
import { ForecastList } from '../models/OpenWeatherResponse';

@Component({
  selector: 'weather',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  forecast$: Observable<ForecastList[]>;
  constructor(private weatherService: WeatherService) {
    this.forecast$ = this.weatherService.forecast$;
  }

  ngOnInit(): void {}
}
