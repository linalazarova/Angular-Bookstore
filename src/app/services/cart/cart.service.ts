import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Cart } from 'src/app/models/Cart';
import { CartItem } from 'src/app/models/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cart:Cart=new Cart();

  addToCart(book:Book):void{

    let cartItem = this.cart.items.find(item=>item.book.id===book.id);

    //if the item is already in the cart
    if(cartItem){
      this.changeQuantity(book.id, cartItem.quantity+1);
      return;
    }

    this.cart.items.push(new CartItem(book));
  }

  removeFromCart(bookId:number):void{
    this.cart.items = this.cart.items.filter(item=>item.book.id!=bookId)
  }

  changeQuantity(bookId:number, quantity:number){
    let cartItem=this.cart.items.find(item=>item.book.id===bookId);

    //if item is null
    if(!cartItem) return;

    cartItem.quantity=quantity;
  }

  getCart() : Cart{
    return this.cart;
  }

}
