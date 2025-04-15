import { describe } from 'node:test';
import { displayUserName } from './index';

describe('displayUserName', () => {
  it('should return the correct display name for a user with both first and last names', () => {
    const user = { firstName: 'John', lastName: 'Doe' };
    const result = displayUserName(user);
    expect(result).toBe('John Doe');
  });
});