import { IsDate, IsEnum } from 'class-validator'
import { Type } from 'class-transformer'
import { MoodType } from './createNewMoodRecord.dto'
import { Optional } from '@nestjs/common'

export class getRecordsFilteredDto {
  @Optional()
  @IsDate()
  @Type(() => Date)
  date?: Date

  @Optional()
  @IsEnum(MoodType)
  moodType?: MoodType
}
