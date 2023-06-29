import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../models/Tag';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  @Input()
  bookDetailsTags?:string[]; 

  @Input()
  justifyContent:string='center';

  tags?:Tag[];

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    if(!this.bookDetailsTags)
      this.tags = this.bookService.getAllTags();
  }

}
