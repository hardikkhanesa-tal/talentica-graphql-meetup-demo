import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { randomUUID } from "crypto";
import { Model } from "mongoose";
import { UserDocument } from "src/schemas/users.schema";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private userModel: Model<UserDocument>) {}

  async create(createUserInput: CreateUserInput) {
    const createduser = new this.userModel();
    createduser.id = randomUUID();
    createduser.fname = String(createUserInput.fname);
    createduser.lname = String(createUserInput.lname);

    const userDocument = await createduser.save();
    console.log("user document", userDocument);
    return userDocument;
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    const query = { id: id };
    return this.userModel.findOne(query);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    let user = this.userModel.findByIdAndUpdate(id, {
      fname: updateUserInput?.fname,
      lname: updateUserInput.lname,
    });
    console.log("user ", user);

    return user;
  }

  remove(id: string) {
    console.log(`User ${id} removed`);
    this.userModel.findOneAndDelete({ _id: id }, function (err, docs) {
      if (err) {
        console.log(err);
        return "User not found";
      } else {
        console.log("Deleted User : ", docs);
        return `"Deleted User : ", ${docs} `;
      }
    });
    return `User ${id} removed`;
  }
}
