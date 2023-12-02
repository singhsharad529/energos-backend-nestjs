import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schemas/user.schema";

 

@Schema({
    timestamps:true
})


export class Blog{
    @Prop()
    title:string;

    @Prop()
    content:string;

    @Prop()
    category: string;
    
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'User'})
    user: User
    
    
}

export const BlogSchema=SchemaFactory.createForClass(Blog);