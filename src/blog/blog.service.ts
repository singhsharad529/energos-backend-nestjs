import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Blog } from './schemas/blog.schema';
import { InjectModel } from '@nestjs/mongoose';
import {Query} from 'express-serve-static-core';
import { User } from 'src/auth/schemas/user.schema';

 


@Injectable()
export class BlogService {
    create(blog: Blog) {
        throw new Error('Method not implemented.');
    }

    constructor(
        @InjectModel(Blog.name)
        private blogModel:mongoose.Model<Blog>
    ){}

    //get all the blogs of all users
    async findAll(query:Query):Promise<Blog[]>{
        console.log(query);
        const keyword=query.keyword ? {
            title:query.keyword
        }:{};

        const resPerPage=2;
        const currentPage=Number(query.page)||1;
        const skip=resPerPage*(currentPage-1);
        
        const blogs=await this.blogModel.find(keyword).limit(resPerPage).skip(skip);
        return blogs;
    }

    //get all the user's blogs
    async findAllByUserId(query:Query,user:User):Promise<Blog[]>{

        const resPerPage=2;
        const currentPage=Number(query.page)||1;
        const skip=resPerPage*(currentPage-1);
        
        const blogs=await this.blogModel.find({user:user._id}).limit(resPerPage).skip(skip);
        return blogs;
    }

    //create a new user's blog
    async createBlog(blog:Blog,user:User):Promise<Blog>{
        const data=Object.assign(blog,{user:user._id})
        const res = await this.blogModel.create(blog);
        return res;
    }

    //get single blog by id
    async findById(id:string):Promise<Blog>{
        try {
            
            const isValidId = mongoose.isValidObjectId(id);
            if (!isValidId) {
                throw new BadRequestException("Please Enter Valid id")
            }
            const blog= await this.blogModel.findById(id);
            return blog;
        }
        catch(error){
            return error;
        }
        
    }

    //update a single blog by id
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

    //delete a single blog by id
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
