import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'weather',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit,OnDestroy {
  userLocation$: Coordinates;
  location
  subscription: Subscription
  constructor(private weatherService: WeatherService) {
    //this.subscription = this.weatherService.userLocation$.subscribe(res => this.userLocation$ = res)
    this.location = this.weatherService.forecast
  }

  ngOnInit(): void {}
  ngOnDestroy(){
    //this.subscription.unsubscribe()
  }
}
