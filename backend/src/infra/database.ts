import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://itallafelynemf:zlS5gCNIneRBUSym@cluster0.xrmp4s8.mongodb.net/',
    );
	//console.log('Connect database success');
  } catch (error) {
    console.log("🚀 ~ file: database.ts:10 ~ connect ~ error:", error);
  }
}