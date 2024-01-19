import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from '../dto/signUp.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  signUp(dto: SignUpDto) {
    return this.usersService.createUser(dto);
  }

  async signIn(email: string, password: string) {
    const user = await this.usersService.getOneUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {sub: user.id, email: user.email};

    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
    }
  }
}
