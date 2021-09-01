import { Album } from "../albums/album";

export interface CartItem{
    album:Album;
    quantity:number;
}