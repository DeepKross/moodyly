import { IsDate, IsNotEmpty } from 'class-validator'
import { Type } from 'class-transformer'

export class DateRangeDto {

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  endDate: Date;
}
