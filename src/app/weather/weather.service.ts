import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {
  tap,
  map,
  switchMap,
  mergeMap,
  filter,
  toArray,
  catchError,
} from 'rxjs/operators';
import { Forecast, OpenWeatherResponse } from './models/OpenWeatherResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _url = 'https://api.openweathermap.org/data/2.5/forecast';
  private key = environment.OPENWEATHERKEY;
  forecast$ = this.getCurrentLocation().pipe(
    map((val) => {
      return new HttpParams()
        .set('lat', val.latitude.toString())
        .set('lon', val.longitude.toString())
        .set('units', 'imperial')
        .set('appid', this.key);
    }),
    //return HTTP PARAMS INTO switchMap Which returns a new Observable that emits OPENWEATHER
    switchMap((params) => {
      return this.http.get<OpenWeatherResponse>(this._url, { params });
    }),
    map((res) => {
      return res.list.map((el) => {
        return {
          ...el,
          city: res.city,
        };
      });
    }),
    //TAKE LIST OFF RESPONSE AND EMIT OBSERVABLEs THAT EMITS THE OBJECT
    mergeMap((value) => of(...value)),
    filter((value, idx) => idx === 1 || idx === 8 || idx === 17),
    toArray(),
    catchError((err) => {
      console.error(err)
      return throwError(err)
    }),
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
