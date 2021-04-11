import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/cardetail';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];
  dataLoaded = false;
  currentBrand!:Brand;
  filterText = "";

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrand()
  }

  getBrand(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
  }
  
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item list-group-item-danger active"
    }
    else{
      return "list-group-item list-group-item-danger"
    }
  }

  clearFilter() {
    this.filterText = "";
    this.getBrand();
  }
}
