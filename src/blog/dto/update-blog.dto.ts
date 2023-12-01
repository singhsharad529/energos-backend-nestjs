import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBlogDto{

    @IsNotEmpty()
    @IsString()
    readonly title: string;
    
    @IsNotEmpty()
    @IsString()
    readonly content: string;
    
    @IsNotEmpty()
    @IsString()
    readonly category:string;
}