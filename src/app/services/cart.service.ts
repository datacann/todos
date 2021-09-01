import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../albums/album';
import { CartItem } from '../cart/cartItem';
import { CartItems } from '../cart/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastrService:ToastrService) { }

  getCart(): CartItem[] {
    return CartItems;
  }

  addToCart(album:Album){

    let item = CartItems.find(c=> c.album.id === album.id)

    // if(item){
    //   this.toastrService.success("favorilere eklendi",album.title)
    // }else{
    //   let cartItem: CartItem = { album: album, quantity: 1 }
    //   CartItems.push(cartItem)
    // }

    if(!item){
      let cartItem: CartItem = { album: album, quantity: 1 }
      CartItems.push(cartItem)
     
    }
     
    

  }


}
