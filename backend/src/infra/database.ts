import mongoose from 'mongoose';

export async function connect(){
  try {
		await mongoose.connect('mongodb+srv://itallafelynemf:zlS5gCNIneRBUSym@cluster0.xrmp4s8.mongodb.net/hero-tickets');
		console.log('Connect database success');
		
	} catch (error) {
		console.log("~ file: database.ts:5 ~ connect ~ error:", error)
	}
}