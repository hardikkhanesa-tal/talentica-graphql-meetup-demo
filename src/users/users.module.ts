import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema } from 'src/schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: "User", schema: UserSchema },

    ]),
  ]
})
export class UsersModule { }
