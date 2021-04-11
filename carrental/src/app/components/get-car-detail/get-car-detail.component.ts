import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/cardetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetailService } from 'src/app/Services/car-detail.service';
import { GetCarDetailService } from 'src/app/Services/get-car-detail.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-get-car-detail',
  templateUrl: './get-car-detail.component.html',
  styleUrls: ['./get-car-detail.component.css']
})
export class GetCarDetailComponent implements OnInit {

  cardetails:CarDetail;
  imageBasePath: string = 'https://localhost:44391/';

  constructor(private activateRoute:ActivatedRoute,
    private getCarDetailService: GetCarDetailService,
    private carDetailService: CarDetailService,
    private toastrService:ToastrService,
    private cartService:CartService,) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
    if(params["carId"]){
      this.getCarDetailbyCarId(params["carId"])
    }
  })
 }

 getCarDetailbyCarId(carId:number){
  this.getCarDetailService.getCarDetailbyCarId(carId).subscribe(response=>{
    this.cardetails = response.data[0]
  })
 }

 addToCart(cardetails:CarDetail){
  if(cardetails.dailyPrice >= 1000){
    this.toastrService.error("Hata","Bu Ürünü Kiralamak İçin Firmamızla İrtibata Geçiniz.");
  }else{
    this.toastrService.success("Sepete Eklendi.",cardetails.brandName + cardetails.modelName);
    this.cartService.addToCart(cardetails);}
}

}
