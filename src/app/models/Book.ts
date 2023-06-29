export class Book{
    id!:number;
    title!:string;
    author!:string;
    description!:string;
    genre!:string;
    price!:number;
    tags?:string[];
    imageUrl!:string;
}