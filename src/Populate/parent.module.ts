import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from './parent.model';
import { ParentService } from './parent.service';
import { Child, ChildSchema } from './child.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: ParentSchema, name: Parent.name },
      { schema: ChildSchema, name: Child.name },
    ]),
  ],
  providers: [ParentService],
})
export class ParentModule {}
