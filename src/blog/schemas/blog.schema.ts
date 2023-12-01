import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

 

@Schema({
    timestamps:true
})


export class Blog{
    @Prop()
    title:string;

    @Prop()
    content:string;

    @Prop()
    category:string;
}

export const BlogSchema=SchemaFactory.createForClass(Blog);