import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable, Subscription } from 'rxjs';
import { ForecastList } from '../models/OpenWeatherResponse';

@Component({
  selector: 'weather',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  location: Observable<ForecastList[]>;
  constructor(private weatherService: WeatherService) {
    this.location = this.weatherService.forecast$;
  }

  ngOnInit(): void {}
}
