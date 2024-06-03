import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import Hero from './schemas/hero.schema';
import mongoose from 'mongoose';
import { CreateHeroDto } from './dto/create-hero.dto';

@Injectable()
export class HerosService {
  constructor(
    @InjectModel(Hero.name) private heroModel: mongoose.Model<Hero>,
  ) {}
  async getHeros() {
    const heros = await this.heroModel.find();
    return { success: true, data: heros };
  }

  async getHero(id: string) {
    const hero = await this.heroModel.findById(id);
    return { success: true, data: hero };
  }

  async createHero(heroDetails: CreateHeroDto) {
    console.log('hero details:', heroDetails);

    const hero = await this.heroModel.create(heroDetails);

    return { message: 'Hero Created', data: hero };
  }

  async editHero(id: string, hero: any) {
    const editedHero = await this.heroModel.findByIdAndUpdate(id, hero, {
      new: true,
    });
    return { message: 'Edited hero', data: editedHero };
  }

  async deleteHero(id: string) {
    const hero = await this.heroModel.findByIdAndDelete(id);
    return { message: 'Deleted Successfully', data: hero };
  }
}
