import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService,

  ) {}

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [''],
    });
  }

  sendDataToService(formValues: any) {
    this.weatherService
      .getWeather(formValues.location)
      .subscribe((data) => (this.weatherData = data));
  }

findUserLocation() {

   this.weatherService.getLocation().subscribe((data) => {this.weatherData = data});



}

}
