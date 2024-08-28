import bcrypt from 'bcryptjs';

export async function generateHash(password: string): Promise<string> {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	return hash;
}

// Verify the hashed password
export async function verifyHash(password: string, hashedPassword: string) {
	return await bcrypt.compare(password, hashedPassword);
}
