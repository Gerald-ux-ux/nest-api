import { Module } from '@nestjs/common';
import { HerosController } from './heros.controller';
import { HerosService } from './heros.service';
import { MongooseModule } from '@nestjs/mongoose';
import Hero, { HeroSchema } from './schemas/hero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  controllers: [HerosController],
  providers: [HerosService],
})
export class HerosModule {}
