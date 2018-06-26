import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  template: `<p>current-weather works!</p>`,
  styles: ['']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor() {
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: new Date(),
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather;
  }

  ngOnInit() {
  }

}