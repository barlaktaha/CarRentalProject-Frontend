import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Color } from 'src/app/models/color';
import { Condition } from 'src/app/models/condition';
import { FuelType } from 'src/app/models/fuelType';
import { GearType } from 'src/app/models/gearType';
import { Model } from 'src/app/models/model';
import { Segment } from 'src/app/models/segment';
import { CarService } from 'src/app/Services/car.service';
import { FuelTypeComponent } from '../fuel-type/fuel-type.component';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  category: Category;
  brands: Brand[];
  color: Color;
  fuel: FuelType;
  gear: GearType;
  condition: Condition;
  segment: Segment;
  model: Model;

  carAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      categoryId: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      fuelId: ['', Validators.required],
      gearId: ['', Validators.required],
      conditionId: ['', Validators.required],
      segmentId: ['', Validators.required],
      modelId: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],
    });
  }

  addCar() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe(
        (data) => {
          this.toastrService.success('Ürün Eklendi', 'Başarılı');
        },
        (dataError) => {
          if(dataError.error.Errors.length>0){
            for (let i = 0; i < dataError.error.Errors.length; i++) {
              this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
              
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz Eksik', 'Dikkat');
    }
  }
}
