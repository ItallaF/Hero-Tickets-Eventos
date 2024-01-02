import mongoose from 'mongoose';

export async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://itallafelynemf:qz09cEkgKxCXF4wt@herotickets.z8ir6qa.mongodb.net/',
    );
	console.log('Connect database success');
  } catch (error) {
    console.log("🚀 ~ file: database.ts:10 ~ connect ~ error:", error);
  }
}