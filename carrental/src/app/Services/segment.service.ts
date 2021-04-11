import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Segment } from '../models/segment';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  apiUrl = 'https://localhost:44391/api/segments/getall';

  constructor(private httpClient: HttpClient) {}

  getSegment(): Observable<ListResponseModel<Segment>> {
    return this.httpClient.get<ListResponseModel<Segment>>(this.apiUrl);
  }
}
