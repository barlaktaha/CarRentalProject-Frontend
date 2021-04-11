import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GearType } from '../models/gearType';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GearTypeService {

  apiUrl = 'https://localhost:44391/api/gears/getall';

  constructor(private httpClient: HttpClient) {}

  getGear(): Observable<ListResponseModel<GearType>> {
    return this.httpClient.get<ListResponseModel<GearType>>(this.apiUrl);
  }
}
