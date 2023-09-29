import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentModule } from './Populate/parent.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/relations'),
    ParentModule,
  ],
})
export class AppModule {}
