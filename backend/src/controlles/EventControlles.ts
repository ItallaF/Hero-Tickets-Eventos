import { NextFunction, Request, Response } from 'express';
import { EventUseCase } from '../useCases/EventUseCase';

class EventControlles {
	constructor(private eventUseCase: EventUseCase){

	}
	async create(request: Request, respose: Response, next: NextFunction) {
		let eventData = request.body;
		const files = request.files as any;
		
		if(files){
			const banner = files.banner[0];
			const flyers = files.flyers;

			eventData = {
				...eventData,
				banner: banner.filename,
				flyers: flyers.map((flyer: any) => flyer.filename),
			};
		}
		//console.log("🚀 ~ file: EventControlles.ts:18 ~ EventControlles ~ create ~ eventData:", eventData);
		try {
			await this.eventUseCase.create(eventData);
			return respose.status(201).json({ message: 'Evento criado com Sucesso!' });
		} catch (error) {
			next(error);
		}
	}
	async findEventByLocation( request: Request, response: Response, next: NextFunction){
		const {latitude, longitude} = request.query;
		try {
			const events = await this.eventUseCase.findEventByLocation(
				String(latitude),
				String(longitude)
			)
			return response.status(200).json(events)
		} catch (error) {
			next(error);
		}
	}
	async findEventsByCategory( request: Request, response: Response, next: NextFunction){
		const { category } = request.params;
		console.log("🚀 ~ file: EventControlles.ts:44 ~ EventControlles ~ findEventsByCategory ~ category:", category)
		try {
			const events = await this.eventUseCase.findEventsByCategory(
				String(category),
			)
			return response.status(200).json(events)
		} catch (error) {
			next(error);
		}
	}
}

export { EventControlles };