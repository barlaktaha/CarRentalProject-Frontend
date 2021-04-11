import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorComponent } from './components/color/color.component';
import { GetCarDetailComponent } from './components/get-car-detail/get-car-detail.component';

const routes: Routes = [
  {path: "",pathMatch:"full",component:CardetailComponent},
  {path: "colors",component:ColorComponent},
  {path: "carDetails/brand/:brandId",component:CardetailComponent},
  {path: "carDetails/:colorName", component:CardetailComponent},
  {path: "cars/getcardetails",component:CardetailComponent},
  {path: "cars/cardetail/:carId",component: GetCarDetailComponent},
  {path: "cars/add", component: CarAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
