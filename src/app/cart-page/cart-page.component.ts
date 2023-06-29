import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../models/Cart';
import { CartItem } from '../models/CartItem';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart;

  constructor(private cartService:CartService, 
    private bookService:BookService){
    
    this.setCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.book.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.book.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart=this.cartService.getCart();
  }

}
