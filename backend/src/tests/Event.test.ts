import request from 'supertest';
import { App } from '../app';

const app = new App().app;

describe('Evet Test', () => {
	it('/POST Event', async () => {
		const event = {
			title: 'Jorge e Mateus',
			price: [{ sector: 'Pista', amount: '20' }],
			categories: ['Show'],
			description: 'Evento descrição',
			city: 'Belo Horizonte',
			location: {
				latitude: '-19.8658659',
				longitude: '-43.9737064',
			},
			coupons: [],
			date: new Date(),
			participants: [],
		};

		const response = await request(app)
			.post('/events')
			.field('title', event.title)
			.field('description', event.description)
			.field('city', event.city)
			.field('coupons', event.coupons)
			.field('categories', event.categories)
			.field('location[latitude]', event.location.latitude)
			.field('location[longitude]', event.location.longitude)
			.field('date', event.date.toISOString())
			.field('price[sector]', event.price[0].sector)
			.field('price[amount]', event.price[0].amount)
			.attach('banner', 'C:/Users/Italla/Downloads/banner01.png')
			.attach('flyers', 'C:/Users/Italla/Downloads/flyer01.png')
			.attach('flyers', 'C:/Users/Italla/Downloads/flyer02.png');

			if(response.error){
				console.log("🚀 ~ file: Event.test.ts:40 ~ it ~ error:", response.error);
			}

		expect(response.status).toBe(201);
		expect(response.body).toEqual({ message: 'Evento criado com Sucesso!' });
	});
})