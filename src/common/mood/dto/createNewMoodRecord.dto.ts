import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer'

export enum MoodType {
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANXIOUS = 'ANXIOUS',
  NEUTRAL = 'NEUTRAL',
  EXCITED = 'EXCITED',
  TIRED = 'TIRED'
}

export class createNewMoodRecordDto {
  @IsEnum(MoodType)
  @IsNotEmpty()
  moodType: MoodType;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  date: Date;

  @IsString()
  note: string;
}
