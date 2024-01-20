import { Module } from '@nestjs/common';
import { MoodController } from './mood.controller';
import { MoodService } from './mood.service';
import { DatabaseService } from '../../database/database.service'

@Module({
  controllers: [MoodController],
  providers: [MoodService, DatabaseService]
})
export class MoodModule {}
