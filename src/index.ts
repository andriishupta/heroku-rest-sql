import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import { Routes } from './routes';

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(helmet());
    app.use(cors());
    app.use(compression());
    app.use(rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100 // limit each IP to 100 requests per windowMs
    }));

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // start express server
    app.listen(3000);

    console.log(
      'Express server has started on port 3000. Open http://localhost:3000 to see results'
    );
  })
  .catch((error) => console.log(error));

process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1);
});
process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});
