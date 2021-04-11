import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { SegmentComponent } from './components/segment/segment.component';
import { ModelComponent } from './components/model/model.component';
import { CategoryComponent } from './components/category/category.component';
import { FuelTypeComponent } from './components/fuel-type/fuel-type.component';
import { GearTypeComponent } from './components/gear-type/gear-type.component';
import { CarImagesComponent } from './components/car-images/car-images.component';
import { ConditionComponent } from './components/condition/condition.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { GetCarDetailComponent } from './components/get-car-detail/get-car-detail.component';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { CarAddComponent } from './components/car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NaviComponent,
    CardetailComponent,
    SegmentComponent,
    ModelComponent,
    CategoryComponent,
    FuelTypeComponent,
    GearTypeComponent,
    CarImagesComponent,
    ConditionComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    GetCarDetailComponent,
    ColorPipePipe,
    BrandPipePipe,
    CarAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
