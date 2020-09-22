import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';
import { DegreesToDirectionPipe } from './pipes/degrees-to-direction.pipe';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';



@NgModule({
  declarations: [WeatherHomeComponent, ForecastCardComponent, DegreesToDirectionPipe, WeatherIconPipe],
  imports: [
    CommonModule
  ],
  exports:[WeatherHomeComponent]
})
export class WeatherModule { }
