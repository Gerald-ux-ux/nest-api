import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HerosService } from './heros.service';
import { CreateHeroDto } from './dto/create-hero.dto';

@Controller('heros')
export class HerosController {
  constructor(private readonly HerosService: HerosService) {}
  @Get('')
  getHeros() {
    return this.HerosService.getHeros();
  }

  @Get(':id')
  getHero(@Param('id') id) {
    return this.HerosService.getHero(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createHero(@Body() hero: CreateHeroDto) {
    return this.HerosService.createHero(hero);
  }
  @Put(':id')
  editHero(@Param('id') id, @Body() hero) {
    return this.HerosService.editHero(id, hero);
  }
  @Delete(':id')
  deleteHero(@Param('id') id) {
    return this.HerosService.deleteHero(id);
  }
}
