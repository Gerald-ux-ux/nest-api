import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HerosModule } from './heros/heros.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kamaugerald36:Yf15il1hjbiad3aA@nest-api.b9pce7g.mongodb.net/heros-record-db?retryWrites=true&w=majority&appName=nest-api',
    ),
    HerosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
