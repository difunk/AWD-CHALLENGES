import { log } from '../utils/logger';

export function createUser(name: string) {
  log(`User created: ${name}`);
  return { name };
}