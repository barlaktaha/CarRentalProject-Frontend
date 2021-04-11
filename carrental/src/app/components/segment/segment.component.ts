import { Component, OnInit } from '@angular/core';
import { Segment } from 'src/app/models/segment';
import { SegmentService } from 'src/app/Services/segment.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {

  segments:Segment[] = [];
  dataLoaded = false;

  
  
  constructor(private segmentService:SegmentService) { }

  ngOnInit(): void {
    this.getSegment()
  }

  getSegment(){
    this.segmentService.getSegment().subscribe(response=>{
      this.segments = response.data
      this.dataLoaded = true;
    })
  }


}
