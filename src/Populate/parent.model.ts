import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Child } from './child.model';

export type ParentDocument = HydratedDocument<Parent>;

@Schema()
export class Parent {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  single: boolean;

  @Prop({ type: [{ type: Types.ObjectId, ref: Child.name }] })
  children: Types.ObjectId[];
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
