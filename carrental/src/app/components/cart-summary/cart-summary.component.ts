import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CartItem } from 'src/app/models/cartitem';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];

  constructor(
    private cartService:CartService,
    private toastrService:ToastrService,
    ) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }

  removeFromCart(cardetail:CarDetail){
    this.cartService.removeFromCart(cardetail)
    this.toastrService.error("Ürün Sepetten Silindi.",cardetail.brandName + cardetail.modelName)
  }

}
