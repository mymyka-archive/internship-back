import * as bcrypt from 'bcrypt';

export async function compareHash(str: string, hash: string): Promise<boolean> {
  return bcrypt.compare(str, hash);
}

export async function hashString(str: string): Promise<string> {
  return bcrypt.hash(str, 10);
}
