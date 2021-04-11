import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/Services/car-image.service';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: ['./car-images.component.css']
})
export class CarImagesComponent implements OnInit {

  carimages:CarImage[] = [];
  dataLoaded = false;

  
  
  constructor(private carimageService:CarImageService) { }

  ngOnInit(): void {
    this.getCarImage()
  }

  getCarImage(){
    this.carimageService.getCarImage().subscribe(response=>{
      this.carimages = response.data
      this.dataLoaded = true;
    })
  }

  getCarIdImage(carId:number){
    this.carimageService.getCarIdImage(carId).subscribe(response=>{
      this.carimages = response.data
      this.dataLoaded = true;
    })
  }
}
