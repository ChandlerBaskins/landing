import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreesToDirection',
})
export class DegreesToDirectionPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    const lookupDirection = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    const DEGREES_ON_COMPASS = 360;
    const EACH_POSITION = 45;
    let lookupIndex = Math.round((value % DEGREES_ON_COMPASS) / EACH_POSITION);
    return lookupDirection[lookupIndex];
  }
}
