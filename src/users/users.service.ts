import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { SignUpDto } from '../dto/signUp.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {
  }
  async getUsers() {
    return this.databaseService.user.findMany();
  }

  async getOneUserByEmail(email: string) {
    return this.databaseService.user.findUnique({
      where: { email: email },
    });
  }

  async createUser(user: SignUpDto) {
    const { password, ...rest } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.databaseService.user.create({
      data: {password: hashedPassword, ...rest},
    });
  }

}
