// import connectDB from '@/lib/dbConnect';
// import Feedback from '@/models/Feedback';

// export default async function handler(req, res) {
// 	if (req.method === 'POST') {
// 		await connectDB();
// 		try {
// 			const feedback = new Feedback(req.body);
// 			await feedback.save();
// 			res.status(201).json({ message: 'Feedback submitted successfully' });
// 		} catch (error) {
// 			res.status(500).json({ error: 'Failed to submit feedback' });
// 		}
// 	} else {
// 		res.status(405).json({ error: 'Method not allowed' });
// 	}
// }
