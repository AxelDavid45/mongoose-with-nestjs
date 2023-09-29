import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChildDocument = HydratedDocument<Child>;

@Schema()
export class Child {
  @Prop()
  age: number;

  @Prop()
  name: string;
}

export const ChildSchema = SchemaFactory.createForClass(Child);
