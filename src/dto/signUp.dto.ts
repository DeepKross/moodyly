import { IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
