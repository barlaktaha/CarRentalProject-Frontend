import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { ModelService } from 'src/app/Services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  models:Model[] = [];
  dataLoaded = false;

  
  
  constructor(private modelService:ModelService) { }

  ngOnInit(): void {
    this.getModel()
  }

  getModel(){
    this.modelService.getModel().subscribe(response=>{
      this.models = response.data
      this.dataLoaded = true;
    })
  }


}
