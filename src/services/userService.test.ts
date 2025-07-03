import { createUser } from './userService';
import * as logger from '../utils/logger';

test('calls log when creating a user', () => {
  const logMock = jest.spyOn(logger, 'log').mockImplementation(() => {});

  createUser('Alice');

  expect(logMock).toHaveBeenCalledWith('User created: Alice');

  logMock.mockRestore(); // reset after test
});