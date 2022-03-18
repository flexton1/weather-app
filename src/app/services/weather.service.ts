import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }





  getWeather(location: string){
    return this.http.get(
        'https://api.weatherapi.com/v1/current.json?key=03fdf1c5903d415f8e2104437221803&q=' + location
    );
    }

    public Longitude: any = navigator.geolocation.getCurrentPosition((position) => this.Longitude = position.coords.longitude);
    public Latitude: any = navigator.geolocation.getCurrentPosition((position) => this.Latitude = position.coords.latitude);

    getLocation(): Observable<any> {

      if (navigator.geolocation) {
          
          const url = `https://api.weatherapi.com/v1/current.json?key=03fdf1c5903d415f8e2104437221803&q=${this.Latitude},${this.Longitude}`;
      return this.http.get(url);

      } else {
        return throwError(() => new Error("Geo location is not available"));
      }
    }



}
