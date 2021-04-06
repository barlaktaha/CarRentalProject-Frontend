import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/cardetail';
import { CarDetailResponseModel } from 'src/app/models/carDetailResponseModel';
import { CarDetailService } from 'src/app/Services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:CarDetail[] = [];
  dataLoaded = false;

  
  
  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetail()
  }

  getCarDetail(){
    this.carDetailService.getCarDetail().subscribe(response=>{
      this.cardetails = response.data
      this.dataLoaded = true;
    })
  }
}
