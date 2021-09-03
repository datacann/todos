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

     if(item){
      this.toastrService.error("bu şarkı zaten var",album.title)
    }else{
      let cartItem: CartItem = { album: album, quantity: 1 }
      CartItems.push(cartItem)
      this.toastrService.success("favorilere eklendi",album.title)
     }
    // if(!item){
    //   let cartItem: CartItem = { album: album, quantity: 1 }
    //   CartItems.push(cartItem)
     
    // }
     
    // let item = CartItems.find(c=> c.album.id === album.id)
    // if(item){
    //   this.toastrService.error("şarkı daha önceden eklenmiş ",album.title)
    // }else{
    //   this.toastrService.success("favorilere eklendi",album.title)
    // }
  }

  removeFromCart(album:Album){
    let item = CartItems.find(c=>c.album.id===album.id)


    if(item){

      if(item.quantity>1){
        item.quantity--
      }else{
        CartItems.splice(CartItems.indexOf(item),1)
      }
    }
  }
}


