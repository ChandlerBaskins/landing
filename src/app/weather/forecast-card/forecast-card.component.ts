import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent implements OnInit {
  @Input() temperature: string;
  @Input() date: string;
  constructor() {}

  ngOnInit(): void {}
}
