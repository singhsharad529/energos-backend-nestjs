import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './schemas/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import {Query as ExpressQuery} from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import {Req, UseGuards} from '@nestjs/common/decorators'


@Controller('blogs')
export class BlogController {

    constructor(private blogService:BlogService){}

    //get all the blogs of all users
    @Get()
    @UseGuards(AuthGuard())
    async getAllBlogs(@Query() query:ExpressQuery):Promise<Blog[]>{
        return this.blogService.findAll(query);
    }

    //get all the user's blogs
    @Get()
    @UseGuards(AuthGuard())
    async getAllBlogsOfUser(@Query() query:ExpressQuery,@Req() req):Promise<Blog[]>{
        return this.blogService.findAllByUserId(query,req.user);
    }

    //create a new user's blog
    @Post('new')
    @UseGuards(AuthGuard())
    async createBlog(@Body() blog:CreateBlogDto,@Req() req):Promise<Blog>{
        console.log(req.user);
        
        return this.blogService.createBlog(blog,req.user);
    }

    //get single blog by id
    @Get(':id')
    @UseGuards(AuthGuard())
    async getBlog(@Param('id') id:string):Promise<Blog>{
        return this.blogService.findById(id);
    }

    //update a single blog by id
    @Put(':id')
    @UseGuards(AuthGuard())
    async updateBlog(@Param('id') id:string,@Body() blog:UpdateBlogDto):Promise<Blog>{
        return this.blogService.updateById(id,blog);
    }

    //delete a single blog by id
    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteBlog(@Param('id') id:string):Promise<Blog>{
        return this.blogService.deleteById(id);
    }
}
