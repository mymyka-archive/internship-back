import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  password: string;
}
