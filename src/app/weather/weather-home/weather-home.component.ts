import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { OpenWeatherResponse } from '../models/OpenWeatherResponse';

@Component({
  selector: 'weather',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  location; 
  constructor(private weatherService: WeatherService) {
    this.location = this.weatherService.forecast;
  }

  ngOnInit(): void {}
}
