export class ErrorType {
  static readonly DEFAULT_ERROR = new ErrorType('', 'Something went wrong');
  static readonly USERNAME_EXISTS = new ErrorType('UsernameExistsException', 'The username selected already exists');

  private constructor(public readonly code: string, public readonly message: any) {}
}