import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
// import { Strategy } from "passport-local";
import { User } from "./schemas/user.schema";
import {Strategy, ExtractJwt } from 'passport-jwt';




@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel(User.name)
        private userModel:Model<User>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.JWT_SECRET
        })
    }

    async validate(payload) {
        const { id } = payload;
        console.log(id);
        
        const user = await this.userModel.findById(id);

        if (!user) {
            throw new UnauthorizedException("Login first to access this endpoint");
        }

        return user;
    }
}