import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  // entities: ["./dist/entities"], // path to our JS entities (dist), relative to `baseDir`
  // entitiesTs: ["./src/entities"], // path to our TS entities (src), relative to `baseDir`/
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  user: "mkkeems",
  password: "mkkeems",
  migrations: {
    path: path.join(__dirname, "/migrations"), //path.join(__dirname, ) => creates absolute path for us
    glob: "!(*.d).{js,ts}",
    disableForeignKeys: false,
  },
  schemaGenerator: {
    disableForeignKeys: false,
  },
} as Parameters<typeof MikroORM.init>[0]; // strict typing our config obj to the MikroORM.init function
