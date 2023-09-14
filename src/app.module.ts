import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from "path";

const mongoDBConnectionString =
  'mongodb://127.0.0.1:27017/demo-graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql")
    }),
    UsersModule,
    MongooseModule.forRoot(mongoDBConnectionString, {
      // useFindAndModify: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
