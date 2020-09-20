import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './weather-home/weather-home.component';
import { ForecastCardComponent } from './forecast-card/forecast-card.component';
import { DegreesToDirectionPipe } from './degrees-to-direction.pipe';



@NgModule({
  declarations: [WeatherHomeComponent, ForecastCardComponent, DegreesToDirectionPipe],
  imports: [
    CommonModule
  ],
  exports:[WeatherHomeComponent]
})
export class WeatherModule { }
