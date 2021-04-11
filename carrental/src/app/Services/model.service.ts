import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiUrl = 'https://localhost:44391/api/models/getall';

  constructor(private httpClient: HttpClient) {}

  getModel(): Observable<ListResponseModel<Model>> {
    return this.httpClient.get<ListResponseModel<Model>>(this.apiUrl);
  }
}
