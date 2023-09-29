import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PopulateModule } from './Populate/populate.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/relations'),
    PopulateModule,
  ],
})
export class AppModule {}
