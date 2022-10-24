import { Entity, OptionalProps, PrimaryKey, Property } from "@mikro-orm/core";
import { ObjectType, Field } from "type-graphql-v2-fork";

@ObjectType()
@Entity()
export class User {
  [OptionalProps]?: "createdAt" | "updatedAt";

  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field(() => String)
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  password!: string;
}
