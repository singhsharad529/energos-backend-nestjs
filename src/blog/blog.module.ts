import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports:[AuthModule,MongooseModule.forFeature([{name:'Blog',schema:BlogSchema}])],
  
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
