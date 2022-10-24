import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql-v2-fork";

@ObjectType()
@Entity()
export class Post {
  [OptionalProps]?: "createdAt" | "updatedAt";

  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  title!: string;

  @Field(() => String)
  @Property()
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
