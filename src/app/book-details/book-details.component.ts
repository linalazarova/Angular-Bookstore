import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book/book.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book!:Book;

  constructor(private activatedRoute:ActivatedRoute, 
    private bookService:BookService,
    private cartService:CartService,
    private router:Router){

    activatedRoute.params.subscribe((params)=>{
      if(params["id"])
      this.book = bookService.getBookById(params["id"]);
    })
  }

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page');
  }

}
