import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Field, InputType, ObjectType } from "@nestjs/graphql";

export type UserDocument = User & Document;

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
@Schema()
export class User {
    @Prop()
    objectType: string;

    @Field()
    id: string;

    @Field({ nullable: true })
    exampleField: number;

    @Field({ nullable: true })
    @Prop()
    fname: string;

    @Field({ nullable: true })
    @Prop()
    lname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
