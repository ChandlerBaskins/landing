import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, pluck, mergeMap, filter } from 'rxjs/operators';
import { OpenWeatherResponse } from './models/OpenWeatherResponse';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _url = 'https://api.openweathermap.org/data/2.5/forecast';
  forecast = this.getCurrentLocation().pipe(
    map((val) => {
      return new HttpParams()
        .set('lat', val.latitude.toString())
        .set('lon', val.longitude.toString())
        .set('units', 'imperial')
        .set('appid', 'a322fa2bc6a6ba7db82a902d88609fa9');
    }),
    //return HTTP PARAMS INTO switchMap Which returns a new Observable that emits OPENWEATHER
    switchMap((params) => {
      return this.http.get<OpenWeatherResponse>(this._url, { params });
    }),
    pluck('list'),
    //TAKE LIST OFF RESPONSE AND EMIT AN OBSERVABLEs THAT EMITS THE LIST OBJECT
    mergeMap((value) => of(...value)),
    filter((value, idx) => idx % 10 === 0),
    tap((res) => console.log(res))
  );
  getCurrentLocation() {
    return new Observable<Coordinates>((subscriber) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          subscriber.next(position.coords);
          subscriber.complete();
        },
        (err) => subscriber.error(err)
      );
    }).pipe(tap((res) => console.log(res)));
  }
  constructor(private http: HttpClient) {}
}
