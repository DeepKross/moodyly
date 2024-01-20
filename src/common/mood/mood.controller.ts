import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common'
import { createNewMoodRecordDto } from './dto/createNewMoodRecord.dto'
import { MoodService } from './mood.service'
import { getRecordsFilteredDto } from './dto/getRecordsFilteredDto.dto'
import { DateRangeDto } from './dto/dateRangeDto'
import { AuthGuard } from '../../auth/auth.guard'
import { UserIsUserGuard } from '../../auth/userIsUser.guard'

@Controller('mood')
export class MoodController {
  constructor(private moodService: MoodService) {
  }

  @UseGuards(AuthGuard, UserIsUserGuard)
  @Get(':personId')
  async getMoodByPersonId(@Param('personId') personId: string, @Body() body: getRecordsFilteredDto) {
    const moodRecords = await this.moodService.getMoodRecordsByPersonId(personId, body)
    return moodRecords
  }

  @UseGuards(AuthGuard, UserIsUserGuard)
  @Get('range/:personId')
  async getMoodInRange(@Param('personId') personId: string, @Body() body: DateRangeDto) {
    const { startDate, endDate } = body
    const moodRecords = await this.moodService.findMoodsInRange(startDate, endDate, personId)
    return moodRecords
  }

  @UseGuards(AuthGuard, UserIsUserGuard)
  @HttpCode(201)
  @Post(':personId')
  async createNewMoodRecord(@Body() body: createNewMoodRecordDto, @Param('personId') personId: string) {
    const newRecord = await this.moodService.createNewMoodRecord(body, personId)
    return { message: 'Mood record created successfully', newRecord }
  }
}
