import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {BooksDTO} from '../../DTO/books.dto';
import { BooksService } from 'src/Services/books/books.service';
import { Book } from 'src/Mongo/Interface/book.interface';

@Controller('books')
  
export class BooksController {
    
constructor(
    private readonly booksService: BooksService
){}

    @Get()
    async getAllBooks(): Promise <Book[]> {
        return await this.booksService.getAllBooks();
    }

    @Get(':bookID')
    async getBookId(@Param('bookID') bookID: string): Promise<Book>{
        return await this.booksService.getBookById(bookID);
    }

  


    @Post()
    async saveBook(@Body() newBook:BooksDTO):Promise<BooksDTO>{
        return await  newBook; 
    }

@Patch(':bookID')
    async updateBook(@Param('bookID') bookID: string, @Body()newBook:BooksDTO):Promise<Book>{
        return await this.booksService.updateBookById(bookID, newBook);
    } 


    @Delete(':bookID')
    deleteBookById(@Param('bookID')bookID : string):Promise<Book>{
        return this.booksService.deleteBookById(bookID);
    }
}
