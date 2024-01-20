import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MoodModule } from './common/mood/mood.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, ConfigModule.forRoot(), MoodModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
