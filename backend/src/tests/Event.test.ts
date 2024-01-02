import crypto from 'node:crypto';
import request from 'supertest';
import { App } from '../app';
import { EventUseCase } from '../useCases/EventUseCase';
import { Event } from '../entities/Event';

const app = new App();
const express = app.app;

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

		const response = await request(express)
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

		if (response.error) {
			console.log("🚀 ~ file: Event.test.ts:40 ~ it ~ error:", response.error);
		}

		expect(response.status).toBe(201);
		expect(response.body).toEqual({ message: 'Evento criado com Sucesso!' });
	});

	it('/GET/:ID Get event by id', async () => {
		const response = await request(express)
			.get('/events/64d7d37b4bb9915090b92139')

		if (response.error) {
			console.log("🚀 ~ file: Event.test.ts:40 ~ it ~ error:", response.error);
		}

		expect(response.status).toBe(200);
	});

	it('/GET event by location', async () => {
		const response = await request(express)
			.get('/events?latitude=-19.8658659&longitude=-43.9737064')

		if (response.error) {
			console.log("🚀 ~ file: Event.test.ts:40 ~ it ~ error:", response.error);
		}

		expect(response.status).toBe(200);
		expect(response.body.length).toBeGreaterThan(0);
	});

	it('/GET event by category', async () => {
		const response = await request(express)
			.get('/events/category/Show')

		if (response.error) {
			console.log("🚀 ~ file: Event.test.ts:40 ~ it ~ error:", response.error);
		}

		expect(response.status).toBe(200);
		expect(response.body.length).toBeGreaterThan(0);
	});

	it('/POST  event insert user', async () => {
    const response = await request(express)
      .post('/events/64d7d4ccf37b17f5282da1cd/participants')
      .send({
        name: 'Italla',
        email: crypto.randomBytes(10).toString('hex') + '@teste.com',
      });

    if (response.error) {
      console.log('🚀 ~ file: Events.test.ts:34 ~ it ~ error:', response.error);
    }

    expect(response.status).toBe(200);
  });
});

const eventRepository = {
	add: jest.fn(),
	findEventsByCategory: jest.fn(),
	findByLocationAndDate: jest.fn(),
	findEventsByCity: jest.fn(),
	findEventsByName: jest.fn(),
	findEventById: jest.fn(),
	update: jest.fn(),
	findEventsByFilter: jest.fn(),
	findEventsMain: jest.fn(),
}
const eventUseCase = new EventUseCase(eventRepository);
const event: Event = {
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
	banner: 'banner.png',
	flyers: ['flyer01.png', 'flyer02.png'],
	formattedAddress: 'Address',
};

describe('Unit Test', () => {
	afterEach(() => {
		jest.clearAllMocks
	});

	it('Shoul return an of events by category', async () => {
		eventRepository.findEventsByCategory.mockResolvedValue([event]);
		const result = await eventUseCase.findEventsByCategory('Show');

		expect(result).toEqual([event]);
		expect(eventRepository.findEventsByCategory).toHaveBeenCalledWith('Show');
	});

	it('Shoul return an of events by name', async () => {
		eventRepository.findEventsByName.mockResolvedValue([event]);
		const result = await eventUseCase.findEventsByName('Jorge e Mateus');

		expect(result).toEqual([event]);
		expect(eventRepository.findEventsByName).toHaveBeenCalledWith('Jorge e Mateus');
	});

	it('Shoul return a event by Id', async () => {
		eventRepository.findEventById.mockResolvedValueOnce(event);
		const result = await eventUseCase.findEventsById('64d7d37b4bb9915090b92139');

		expect(result).toEqual(event);
		expect(eventRepository.findEventById).toHaveBeenCalledWith('64d7d37b4bb9915090b92139');
	})
});
