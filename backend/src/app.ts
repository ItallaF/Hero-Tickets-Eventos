import express, { Application } from 'express';
import { connect } from './infra/database';

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.initializeRoutes();
    this.interceptionsErro();
    connect();
  }
  initializeRoutes(){
    //this.app.use('/',);
  }

  interceptionsErro(){
    //this.app.use();
  }

  middlewaresInitialize(){
  this.app.use(express.json());
  this.app.use(express.urlencoded({ extended: true }));
 }

  listen(){
    this.app.listen(3333, () => console.log('sever is running'));
  }
}

export { App };