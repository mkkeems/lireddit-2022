import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request, Response } from "express";
import "express-session";

declare module "express-session" {
  export interface SessionData {
    [key: string]: any;
    // user: { [key: string]: any };
    // userId: number;
  }
}

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
};
