import mongoose from 'mongoose';

// Avoids continuous connection when connected once
declare global {
	var client: mongoose.Connection;
}

const connectDB = async () => {
	try {
		// Check if there's already an existing connection
		if (global.client) {
			return global.client;
		}

		// Ensure the MongoDB URI is defined
		const uri = process.env.MONGODB_URI;
		if (!uri) {
			throw new Error('MONGODB_URI is not defined');
		}

		const client = (global.client = mongoose.connection);

		// Attach a listener for any errors and display them
		client.on(
			'error',
			console.error.bind(
				console,
				'Connection error, failed to establish a connection with MongoDB'
			)
		);

		// Attach a listener for a successful connection and notify
		client.once('open', () =>
			console.log('Established connection with MongoDB successfully')
		);

		// Connect to MongoDB
		await mongoose.connect(uri);

		return client;
	} catch (error: any) {
		console.error(
			`There's a problem with MongoDB. Here is the error: ${error.message}`
		);
		throw error; // Rethrow the error to handle it upstream if needed
	}
};

export default connectDB;
