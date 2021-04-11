import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {

  apiUrl = 'https://localhost:44391/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImage(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarIdImage(carId:number):  Observable<ListResponseModel<CarImage>> { 
    let newPath = this.apiUrl + "carimages/getimagesbycarid?carId=" +carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }


}
