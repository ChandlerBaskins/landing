import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from '../models/OpenWeatherResponse';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent implements OnInit {
  @Input() forecast: Forecast;
  constructor() {}

  ngOnInit(): void {}
}
