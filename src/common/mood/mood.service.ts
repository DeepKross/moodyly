import { Injectable, Logger } from '@nestjs/common'
import { createNewMoodRecordDto } from './dto/createNewMoodRecord.dto'
import { DatabaseService } from '../../database/database.service'
import { getRecordsFilteredDto } from './dto/getRecordsFilteredDto.dto'

@Injectable()
export class MoodService {
  constructor(private readonly databaseService: DatabaseService) {
  }

  private readonly logger = new Logger(MoodService.name)


  async getMoodRecordsByPersonId(personId: string, filters: getRecordsFilteredDto) {
    const moodRecords = await this.databaseService.mood.findMany({
      where: { userId: personId, date: filters.date, moodType: filters.moodType },
    })
    this.logger.log(`Mood records for user ${personId} retrieved successfully`)
    return moodRecords
  }

  async findMoodsInRange(startDate: Date, endDate: Date, personId: string) {
    const moodRecords = await this.databaseService.mood.findMany({
      where: { date: { gte: startDate, lte: endDate } },
    })
    this.logger.log(`Mood records for user ${personId} retrieved successfully`)
    return moodRecords
  }

  async createNewMoodRecord(body: createNewMoodRecordDto, personId: string) {
    const newRecord = await this.databaseService.mood.create({
      data: {
        userId: personId,
        moodType: body.moodType,
        date: body.date,
        notes: body.note,
      },
    })
    this.logger.log(`New mood record created for user ${personId}`)
    return newRecord
  }
}
