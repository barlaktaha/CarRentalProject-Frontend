import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/Services/car-detail.service';
import { CarImageService } from 'src/app/Services/car-image.service';
import { CarService } from 'src/app/Services/car.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  cardetails:CarDetail[];
  currentDetail : CarDetail;
  dataLoaded = false;
  imageBasePath: string = 'https://localhost:44391/';
  filterText = "";


  constructor(
    private carDetailService:CarDetailService,
    private activateRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService,
    ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailbyBrand(params["brandId"])
      }
      if(params["colorName"]){
        this.getCarDetailbyColor(params["colorName"])
      }
      else{
        this.getCarDetail()   
      }
    });
  }

  setCurrentDetail(cardetail: CarDetail){
    this.currentDetail = cardetail;
  }
  
  getCarDetail(){
    this.carDetailService.getCarDetail().subscribe(response=>{
      this.cardetails = response.data
      this.dataLoaded = true;
    })
  }

  getCarDetailbyBrand(brandId : number){
    this.carDetailService.getCarDetailbyBrand(brandId).subscribe(response=>{
      this.cardetails = response.data
      this.dataLoaded = true;
    })
  }
  
  getCarDetailbyColor(colorName: string){
    this.carDetailService.getCarDetailbyColor(colorName).subscribe(response=>{
      this.cardetails = response.data
    })
  }

  addToCart(cardetail:CarDetail){
    if(cardetail.dailyPrice >= 1000){
      this.toastrService.error("Hata","Bu Ürünü Kiralamak İçin Firmamızla İrtibata Geçiniz.");
    }else{
      this.toastrService.success("Sepete Eklendi.",cardetail.brandName + cardetail.modelName);
      this.cartService.addToCart(cardetail);}
  }
}
