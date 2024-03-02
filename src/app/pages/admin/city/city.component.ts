import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  
  cityList: any[] = [];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void{
    
  }

  getAllCity() {
    this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllCity").subscribe((res: any) => {
      this.cityList = res.data;
    })
  }

}
