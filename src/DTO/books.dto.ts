import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { authorDTO } from "./author.dto";

export class BooksDTO{

    @IsNotEmpty()
    readonly name: string;

  
    readonly author: authorDTO[];


    readonly language: string;

    readonly publisher: string;


    readonly realeseYear: number;

  
    readonly pages: number;
}