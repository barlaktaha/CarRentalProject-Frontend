import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuelType } from '../models/fuelType';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  apiUrl = 'https://localhost:44391/api/fuels/getall';

  constructor(private httpClient: HttpClient) {}

  getFuel(): Observable<ListResponseModel<FuelType>> {
    return this.httpClient.get<ListResponseModel<FuelType>>(this.apiUrl);
  }
}
