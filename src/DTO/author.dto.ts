import { IsNotEmpty, MinLength, IsString } from "class-validator";


export class authorDTO {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly name: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly surname: string;

}