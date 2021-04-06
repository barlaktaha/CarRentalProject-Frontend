import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car1: any = {
    carId: 1,
    categoryId: 1,
    brandId: 1,
    colorId: 1,
    fuelId: 1,
    gearId: 1,
    conditionId: 1,
    segmentId: 1,
    modelId: 1,
    dailyPrice: 350,
    modelYear: 2016,
  };
  car2: any = {
    carId: 2,
    categoryId: 2,
    brandId: 1,
    colorId: 2,
    fuelId: 1,
    gearId: 1,
    conditionId: 1,
    segmentId: 1,
    modelId: 2,
    dailyPrice: 250,
    modelYear: 2017,
  };
  car3: any = {
    carId: 3,
    categoryId: 3,
    brandId: 1,
    colorId: 3,
    fuelId: 1,
    gearId: 1,
    conditionId: 1,
    segmentId: 1,
    modelId: 3,
    dailyPrice: 150,
    modelYear: 2018,
  };
  car4: any = {
    carId: 4,
    categoryId: 4,
    brandId: 1,
    colorId: 4,
    fuelId: 1,
    gearId: 1,
    conditionId: 1,
    segmentId: 1,
    modelId: 4,
    dailyPrice: 450,
    modelYear: 2019,
  };
  car5: any = {
    carId: 5,
    categoryId: 5,
    brandId: 1,
    colorId: 5,
    fuelId: 1,
    gearId: 1,
    conditionId: 1,
    segmentId: 1,
    modelId: 5,
    dailyPrice: 550,
    modelYear: 2020,
  };

  cars = [
    this.car1, 
    this.car2, 
    this.car3, 
    this.car4, 
    this.car5
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
