import { IsEmpty, IsNotEmpty, IsString } from "class-validator";
import { User } from "src/auth/schemas/user.schema";

export class CreateBlogDto{

    @IsNotEmpty()
    @IsString()
    readonly title: string;
    
    @IsNotEmpty()
    @IsString()
    readonly content: string;
    
    @IsNotEmpty()
    @IsString()
    readonly category: string;
    
    @IsEmpty({message:"You can't pass user id"})
    readonly user:User
}