import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book } from "../Interface/book.interface";
import { BooksDTO } from "src/DTO/books.dto";

@Injectable()
export class BookRepository{
    deleteBookById(bookID: string): Book | PromiseLike<Book> {
        return this.bookModel.findOneAndDelete({_id: bookID});
    }
    
    constructor(
        @InjectModel('book') private readonly bookModel: Model<Book>
    ){}

async getAllBooks(): Promise<Book[]>{
    return await this.bookModel.find({}, {__v: false}).sort({name: +1}).exec();}

async getBookId(bookID: string): Promise<Book>{
    return await this.bookModel.findById(bookID, {__v: false})}

async updateBookById(bookID: string, newBook: BooksDTO):Promise<Book>{  
    return await this.bookModel.replaceOne({_id: bookID}, newBook);
    } 
}