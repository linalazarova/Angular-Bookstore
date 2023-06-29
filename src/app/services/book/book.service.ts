import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Tag } from 'src/app/models/Tag';
import { books } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBookById(id:number) : Book{
    return this.getAll().find(book=>book.id==id)!;
  }

  getAllBooksBySearchTerm(searchTerm:string) : Book[]{
    
    return this.getAll().filter(book=>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 5 },
      { name: 'Fiction', count: 3 },
      { name: 'Non-Fiction', count: 2 }
    ];
  }

  getAllBooksByTag(tag: string): Book[] {

    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(book => book.tags?.includes(tag));
  }

  getAll():Book[]{

    return books;
  }
}
