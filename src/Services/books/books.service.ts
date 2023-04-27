import { BadRequestException, Injectable } from '@nestjs/common';
import { asyncScheduler } from 'rxjs';
import { BooksDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Mongo/Interface/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
    bookModel: any;

    constructor(private readonly bookRepository: BookRepository){}

   

    async  saveBook(newBook: BooksDTO): Promise<BooksDTO> {
        return await newBook;
    } 
    
    async getAllBooks(): Promise<Book[]> {
        const allBooks = await this.bookRepository.getAllBooks();
        if(!allBooks.length){
            throw new BadRequestException('There are no books registered yet');
        return allBooks;
        }}

    async getBookById(bookID: string): Promise<Book> {
        const existBook = await this.bookRepository.getBookById(bookID);
       
        if(!existBook){
            throw new BadRequestException('Book not found');
        
        }
       
        try {
            return this.bookRepository.getBookId(bookID);
        } catch (e) {
            throw new BadRequestException('Book not found'); 
        }
    }

    async deleteBookById(bookID: string): Promise<Book> {
        try {
            return this.bookRepository.deleteBookById(bookID);
        }
        catch (e) {
            throw new BadRequestException('Book not found');
        }
    }   

 async updateBookById(bookID: string, newBook: BooksDTO): Promise<Book> {
    const existBook = await this.bookRepository.getBookById(bookID);
       
        if(!existBook){
            throw new BadRequestException('Book not found');
       
        } return await this.bookRepository.updateBookById(bookID, newBook);
}}




