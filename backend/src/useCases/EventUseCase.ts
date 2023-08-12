import axios from 'axios';
import { Event } from '../entities/Event';
import { HTTPExceptions } from '../interfaces/HTTPExceptions';
import { EventRepository } from '../repositories/EventRepository';

class EventUseCase {
	constructor(private eventRepository: EventRepository) { }
	async create(eventData: Event) {
		if (!eventData.banner) {
			throw new HTTPExceptions(400, 'Banner is requerid');
		}
		if (!eventData.flyers) throw new HTTPExceptions(400, 'Flyers is requerid');

		if (!eventData.location) throw new HTTPExceptions(400, 'Location is requerid');

		//verificar evento no local e horario
		const verifyEvent = await this.eventRepository.findByLocationAndDate(
			eventData.location,
			eventData.date
		);
		if (verifyEvent) throw new HTTPExceptions(400, 'Event already exists');

		const cityName = await this.getCityNameByCoordinates(
			eventData.location.latitude,
			eventData.location.longitude,
		);
		eventData = {
			...eventData,
			city: cityName,
		}
		const result = await this.eventRepository.add(eventData);
		return result;
	}

	async findEventByLocation(latitude: string, longitude: string) {
		const cityName = await this.getCityNameByCoordinates(latitude, longitude,);
		const findEventByCity = await this.eventRepository.findEventsByCity(cityName);

		const eventWithRadius = findEventByCity.filter(evennt => {
			const distance = this.calculateDistance(
				Number(latitude),
				Number(longitude),
				Number(evennt.location.latitude),
				Number(evennt.location.longitude),
			)
			return distance <= 100
		});

		return eventWithRadius;
	}

	async findEventsByCategory(category: string) {
		if (!category) throw new HTTPExceptions(400, 'Category is requered')
		const events = await this.eventRepository.findEventsByCategory(category);

		return events;
	}

	private async getCityNameByCoordinates(latitude: string, longitude: string) {
		try {
			const response = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAhKk5549E8oy5zs-cxAqvy3_j3jDQJoBo`);
			if (response.data.status === 'OK' && response.data.results.length > 0) {
				const address = response.data.results[0].address_components;
				const cityType = address.find(
					(type: any) => type.types.includes('administrative_area_level_2') &&
						type.types.includes('political')
				);
				return cityType.long_name;
			}
			throw new HTTPExceptions(404, 'City not found');
		} catch (error) {
			throw new HTTPExceptions(401, 'Error request city name');
		}

	}

	private calculateDistance(
		lat1: number,
		lon1: number,
		lat2: number,
		lon2: number,
	): number {
		const R = 6371; // Raio da Terra em quilômetros
		const dLat = this.deg2rad(lat2 - lat1);
		const dLon = this.deg2rad(lon2 - lon1);
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(this.deg2rad(lat1)) *
			Math.cos(this.deg2rad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const d = R * c;
		return d;
	}
	private deg2rad(deg: number): number {
		return deg * (Math.PI / 180);
	}
}

export { EventUseCase };