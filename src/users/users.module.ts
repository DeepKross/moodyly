import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseService } from '../database/database.service';

@Module({
  imports: [UsersModule],
  providers: [UsersService, DatabaseService],
  exports: [UsersService],
})
export class UsersModule {}
