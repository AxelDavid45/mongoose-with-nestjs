import { Model } from 'mongoose';
import { Parent } from './parent.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Child } from './child.model';

@Injectable()
export class ParentService {
  constructor(
    @InjectModel(Parent.name)
    private parentModel: Model<Parent>,
    @InjectModel(Child.name) private childModel: Model<Child>,
  ) {}

  // await get(ParentService).execute()
  async execute() {
    // First child
    const firstChild = await this.generateChild();

    const parentCreated = await this.parentModel.create({
      age: 35,
      name: `Parent ${Math.round(Math.random() * 1000)}`,
    });

    parentCreated.children.push(firstChild._id);
    await parentCreated.save();

    const modelPopulated = await this.parentModel
      .find({})
      .populate<{ children: Child }>('children')
      .exec();

    console.log('PopulatedModelLength', modelPopulated.length);
    console.log('PopulatedModel', modelPopulated);

    modelPopulated.forEach((m) => console.log('Children', m.children));

    return parentCreated.toJSON();
  }

  generateChild() {
    const children = new Child();
    children.age = 5;
    children.name = `Child-${Math.round(Math.random() * 12)}`;
    return this.childModel.create(children);
  }
}
