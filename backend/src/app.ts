import cors from 'cors';
import express, { Application } from 'express';
import path from 'node:path';
import { connect } from './infra/database';
import { errorMiddleware } from './middlewares/error.middlewares';
import { EventRoutes } from './routes/event.route';


class App {
  public app: Application;
  private eventRoutes = new EventRoutes();

  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionsErro();
    connect();
  }
  private initializeRoutes() {
    this.app.use('/events', this.eventRoutes.router);
  }

  private interceptionsErro() {
    this.app.use(errorMiddleware);
  }

  private middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      '/uploads',
      express.static(path.join(__dirname, './tmp/uploads')),
    );
    this.app.use(express.urlencoded({ extended: true }));
  }

  listen() {
    this.app.listen(3333, () => console.log('sever is running'));
  }
}

export { App };
