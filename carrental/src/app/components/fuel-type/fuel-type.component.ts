import { Component, OnInit } from '@angular/core';
import { FuelType } from 'src/app/models/fuelType';
import { FuelTypeService } from 'src/app/Services/fuel-type.service';

@Component({
  selector: 'app-fuel-type',
  templateUrl: './fuel-type.component.html',
  styleUrls: ['./fuel-type.component.css']
})
export class FuelTypeComponent implements OnInit {

  fuels:FuelType[] = [];
  dataLoaded = false;

  
  
  constructor(private fueltypeService:FuelTypeService) { }

  ngOnInit(): void {
    this.getFuel()
  }

  getFuel(){
    this.fueltypeService.getFuel().subscribe(response=>{
      this.fuels = response.data
      this.dataLoaded = true;
    })
  }

}
