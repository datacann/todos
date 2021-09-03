import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../albums/album';
import { CartService } from '../services/cart.service';
import { CartItem } from './cartItem';
import { CartItems } from './cartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[] = []

  constructor(private cartService:CartService,private toastrService:ToastrService) { }


  ngOnInit(): void {
    this.cartItems=this.cartService.getCart();
  }

  
  removeFromCart(album:Album){
    this.cartService.removeFromCart(album)
    this.toastrService.error("silindi",album.title)
  }

}
