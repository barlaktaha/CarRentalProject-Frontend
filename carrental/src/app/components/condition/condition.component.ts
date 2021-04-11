import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/models/condition';
import { ConditionService } from 'src/app/Services/condition.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  conditions:Condition[] = [];
  dataLoaded = false;

  
  
  constructor(private conditionService:ConditionService) { }

  ngOnInit(): void {
    this.getCondition()
  }

  getCondition(){
    this.conditionService.getCondition().subscribe(response=>{
      this.conditions = response.data
      this.dataLoaded = true;
    })
  }


}
