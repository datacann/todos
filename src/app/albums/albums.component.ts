import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItems } from '../cart/cartItems';
import { AlbumService } from '../services/album.service';
import { CartService } from '../services/cart.service';
import { Album } from './album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:Album[]=[]

  constructor(private albumService:AlbumService, 
    private toastrService:ToastrService , 
    private cartService:CartService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(data=>{
      this.albums = data
    })
  }

  addToCart(album:Album){

    let item = CartItems.find(c=> c.album.id === album.id)

    if(item){
      this.toastrService.error("şarkı daha önceden eklenmiş ",album.title)
    }else{
      this.toastrService.success("favorilere eklendi",album.title)
    }

    
    this.cartService.addToCart(album);
    

}

}
