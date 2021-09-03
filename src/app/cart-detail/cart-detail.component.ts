import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../albums/album';
import { CartItem } from '../cart/cartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  cartItems : CartItem[] = []

  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart()

  }

  removeFromCart(album:Album){
    this.cartService.removeFromCart(album)
    this.toastrService.error("favorilerden çıkartıldı",album.title)
  }

}
