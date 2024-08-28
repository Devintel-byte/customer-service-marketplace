import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const client = twilio(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { to, message } = req.body;

		try {
			const messageResponse = await client.messages.create({
				body: message,
				from: process.env.TWILIO_PHONE_NUMBER,
				to,
			});

			res.status(200).json({ success: true, sid: messageResponse.sid });
		} catch (error) {
			res.status(400).json({ success: false, error: 'Failed to send SMS' });
		}
	} else {
		res.status(405).json({ success: false, error: 'Method not allowed' });
	}
}
