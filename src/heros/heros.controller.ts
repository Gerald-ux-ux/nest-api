import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HerosService } from './heros.service';

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

  @Post('')
  createHero(@Body() hero) {
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
