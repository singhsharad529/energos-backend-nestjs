import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Blog } from './schemas/blog.schema';
import { InjectModel } from '@nestjs/mongoose';
import {Query} from 'express-serve-static-core';

 


@Injectable()
export class BlogService {
    create(blog: Blog) {
        throw new Error('Method not implemented.');
    }

    constructor(
        @InjectModel(Blog.name)
        private blogModel:mongoose.Model<Blog>
    ){}

    async findAll(query:Query):Promise<Blog[]>{
        console.log(query);
        const keyword=query.keyword ? {
            title:query.keyword
        }:{};

        const resPerPage=3;
        const currentPage=Number(query.page)||1;
        const skip=resPerPage*(currentPage-1);
        
        const blogs=await this.blogModel.find(keyword).limit(resPerPage).skip(skip);
        return blogs;
    }

    async createBlog(blog:Blog):Promise<Blog>{
        const res= await this.blogModel.create(blog);
        return res;
    }

    async findById(id:string):Promise<Blog>{
        try{
            const blog= await this.blogModel.findById(id);
            return blog;
        }
        catch(error){
            throw new NotFoundException('Blog not found',error);
        }
        
    }

    async updateById(id:string,blog:Blog):Promise<Blog>{
        try{
            const res= await this.blogModel.findByIdAndUpdate(id,blog,{
                new:true,
                runValidators:true
            });
            return res;
        }
        catch(error){
            throw new NotFoundException('Blog not found',error);
        }
        
    }

    async deleteById(id:string):Promise<Blog>{
        try{
            const blog= await this.blogModel.findByIdAndDelete(id,{
                new:true,
                runValidators:true
            });
            return blog;
        }
        catch(error){
            throw new NotFoundException('Blog not found',error);
        }
        
    }

}
