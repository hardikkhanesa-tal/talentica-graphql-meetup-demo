import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
  @Field(() => String)
  fname: String;

  @Field(() => String)
  lname: String;
}
