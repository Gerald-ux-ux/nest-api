import { IsNotEmpty } from 'class-validator';

export class CreateHeroDto {
  @IsNotEmpty({ message: 'Hero should have a name' })
  name: string;
  @IsNotEmpty({ message: 'Hero should have a real name' })
  realName: string;
  @IsNotEmpty({ message: 'Hero should be an Avenger' })
  isAvenger: boolean;
}
