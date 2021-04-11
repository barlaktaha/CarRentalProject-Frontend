import { Component, OnInit } from '@angular/core';
import { GearType } from 'src/app/models/gearType';
import { GearTypeService } from 'src/app/Services/gear-type.service';

@Component({
  selector: 'app-gear-type',
  templateUrl: './gear-type.component.html',
  styleUrls: ['./gear-type.component.css']
})
export class GearTypeComponent implements OnInit {

  gears:GearType[] = [];
  dataLoaded = false;

  
  
  constructor(private gearService:GearTypeService) { }

  ngOnInit(): void {
    this.getGear()
  }

  getGear(){
    this.gearService.getGear().subscribe(response=>{
      this.gears = response.data
      this.dataLoaded = true;
    })
  }
}
