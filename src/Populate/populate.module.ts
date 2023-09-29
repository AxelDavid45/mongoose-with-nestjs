import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Parent, ParentSchema } from './parent.model';
import { PopulateService } from './populate.service';
import { Child, ChildSchema } from './child.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: ParentSchema, name: Parent.name },
      { schema: ChildSchema, name: Child.name },
    ]),
  ],
  providers: [PopulateService],
})
export class PopulateModule {}
