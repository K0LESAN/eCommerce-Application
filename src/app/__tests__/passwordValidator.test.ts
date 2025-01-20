import { passwordValidator } from '@/features/Validation';

describe('passwordValidator', () => {
  ['abcd', '1234', 'abcd1234', 'abcd1234~'].forEach((password) => {
    it('should return error message for incorrect password value', async () => {
      const result = await passwordValidator(password);
      expect(result).toStrictEqual({
        result: false,
        message:
          'Password must be 8+ characters with only letters (upper/lowercase) and digits'
      });
    });
  });

  it('should return result: true for correct password value', async () => {
    const validValue = 'Qwerty12';
    const result = await passwordValidator(validValue);

    expect(result).toStrictEqual({
      result: true,
      message: ''
    });
  });
});
