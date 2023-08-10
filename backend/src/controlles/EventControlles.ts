import { NextFunction, Request, Response } from 'express';
import { EventUseCase } from '../useCases/EventUseCase';

class EventControlles {
	constructor(private eventUseCase: EventUseCase){

	}
	async create(request: Request, respose: Response, next: NextFunction) {
		const eventData = request.body;
		try {
			await this.eventUseCase.create(eventData);
			return respose.status(201).json({ message: 'Evento criado com Sucesso!' });
		} catch (error) {
			next(error);
		}
	}
}

export { EventControlles };