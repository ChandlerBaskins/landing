import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value <=50) return "assets/sunny.svg"
    if(value >= 51) return "assets/cloudy.svg"
    return '';
  }

}
