import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:44391/api/";

  constructor(private httpClient:HttpClient) { }

  getCarDetail(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailbyBrand(brandId : number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getallbybrandid?brandId="+brandId;
   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailbyColor(colorName: string): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getallbycolor?colorName="+colorName;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }


}
