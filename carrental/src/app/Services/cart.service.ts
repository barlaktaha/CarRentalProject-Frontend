import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Injectable } from '@angular/core';
import { CarDetail } from '../models/cardetail';
import { CartItem } from '../models/cartitem';
import { CartItems } from '../models/cartitems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(cardetail:CarDetail){
    let item = CartItems.find(c=> c.cardetail.carId === cardetail.carId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.cardetail = cardetail;
      cartItem.quantity=1;
      CartItems.push(cartItem);
    }
  }
  removeFromCart(cardetail:CarDetail){
    let item:CartItem = CartItems.find(c=> c.cardetail.carId === cardetail.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
 }

}
