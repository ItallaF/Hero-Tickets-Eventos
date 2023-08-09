import { Router } from 'express';
import { EventRepositoryMongoose } from '../repositories/EventRepositoryMongoose';
import { EventControlles } from '../controlles/EventControlles';
import { EventUseCase } from '../useCases/EventUseCase';

class EventRoutes {
  public router: Router;
  private eventControlles: EventControlles;
  constructor() {
    this.router = Router();
    const eventRepository = new EventRepositoryMongoose();
    const eventUseCase = new EventUseCase(eventRepository);
    this.eventControlles = new EventControlles(eventUseCase);
    this.initRoutes();
  }
  initRoutes() {
    this.router.post(
			'/',
			this.eventControlles.create.bind(this.eventControlles),
			);
    }
}

export { EventRoutes };