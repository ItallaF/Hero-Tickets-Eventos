import { Router } from 'express';
import { EventRepositoryMongoose } from '../repositories/EventRepositoryMongoose';
import { EventControlles } from '../controlles/EventControlles';
import { EventUseCase } from '../useCases/EventUseCase';
import { upload } from '../infra/multer';

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
      upload.fields([
        {
          name: 'banner',
          maxCount: 1
        },
        {
          name: 'flyers',
          maxCount: 3
        }
      ]),
      this.eventControlles.create.bind(this.eventControlles),
    );
    this.router.get(
      '/',
      this.eventControlles.findEventByLocation.bind(this.eventControlles
      ),
    );
    this.router.get(
      '/:id',
      this.eventControlles.findEventById.bind(this.eventControlles
      ),
    );
    this.router.get(
      '/category/:category',
      this.eventControlles.findEventsByCategory.bind(this.eventControlles
      ),
    );
    this.router.post(
      '/:id/participants',
      this.eventControlles.addParticipant.bind(this.eventControlles),
    );
  }
}

export { EventRoutes };