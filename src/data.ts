import { Book } from "./app/models/Book";

export const books:Book[] = [
    {
        id: 1,
        title: '1984',
        author: 'George Orwell',
        description: 'Nineteen Eighty-Four (also published as 1984) is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. ',
        price: 10,
        genre: 'Dystopian fiction',
        imageUrl: 'assets/images/1984.jpg',
        tags: ['Fiction']
      },
      {
        id: 2,
        title: 'Lord Of The Rings',
        author: 'J. R. R. Tolkien',
        description: 'The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien.',
        price: 15,
        genre: 'Fantasy',
        imageUrl: 'assets/images/lord of the rings.jpg',
        tags: ['Fiction']
      },
      {
        id: 3,
        title: 'Mindpower',
        author: 'John Kehoe',
        description: 'In Mind Power Into the 21st Century, John Kehoe has articulated a set of life-changing principles for charting a course to success and happiness.',
        price: 10,
        genre: 'Personal development',
        imageUrl: 'assets/images/mindpower.jpg',
        tags: ['Non-Fiction']
      },
      {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
        price: 8,
        genre: 'Novel',
        imageUrl: 'assets/images/pride and prejudice.jpg',
        tags: ['Fiction']
      },
      {
        id: 5,
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        description: 'Think and Grow Rich is a book written by Napoleon Hill released in 1937 and promoted as a personal development and self-improvement book. The book is considered a classic in the personal development genre and has been widely influential in shaping the way people think about success and wealth.',
        price: 15,
        genre: 'Personal development',
        imageUrl: 'assets/images/tgr.jpg',
        tags: ['Non-Fiction']
      }
]