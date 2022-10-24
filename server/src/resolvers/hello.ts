import { Resolver, Query } from "type-graphql-v2-fork";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return "bye";
  }
}
