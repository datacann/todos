import { Component, OnInit } from '@angular/core';
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

  constructor(private cartService:CartService) { }


  ngOnInit(): void {
    this.cartItems=this.cartService.getCart();
  }

  


}
