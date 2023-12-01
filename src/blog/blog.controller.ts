import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-book.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import {Query as ExpressQuery} from 'express-serve-static-core';


@Controller('blogs')
export class BlogController {

    constructor(private blogService:BlogService){}


    @Get()
    async getAllBlogs(@Query() query:ExpressQuery):Promise<Blog[]>{
        return this.blogService.findAll(query);
    }

    @Post('new')
    async createBlog(@Body() blog:CreateBlogDto):Promise<Blog>{
        return this.blogService.createBlog(blog);
    }

    @Get(':id')
    async getBlog(@Param('id') id:string):Promise<Blog>{
        return this.blogService.findById(id);
    }

    @Put(':id')
    async updateBlog(@Param('id') id:string,@Body() blog:UpdateBlogDto):Promise<Blog>{
        return this.blogService.updateById(id,blog);
    }

    @Delete(':id')
    async deleteBlog(@Param('id') id:string):Promise<Blog>{
        return this.blogService.deleteById(id);
    }
}
