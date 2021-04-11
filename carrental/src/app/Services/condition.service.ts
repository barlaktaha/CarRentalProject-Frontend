import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from '../models/condition';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {

  apiUrl = 'https://localhost:44391/api/conditions/getall';

  constructor(private httpClient: HttpClient) {}

  getCondition(): Observable<ListResponseModel<Condition>> {
    return this.httpClient.get<ListResponseModel<Condition>>(this.apiUrl);
  }
}
