import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherHomeComponent } from './weather-home/weather-home.component';



@NgModule({
  declarations: [WeatherHomeComponent],
  imports: [
    CommonModule
  ],
  exports:[WeatherHomeComponent]
})
export class WeatherModule { }
