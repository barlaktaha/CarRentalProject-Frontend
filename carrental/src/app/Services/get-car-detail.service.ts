import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GetCarDetailService {

  apiUrl= "https://localhost:44391/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetailbyCarId(carId:number): Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcariddetail?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
