export class ErrorType {
  static readonly DEFAULT_ERROR = new ErrorType("Something went wrong", "");
  static readonly INPUT_ERROR = new ErrorType("Something went wrong with the form, please review the fields", "");
  static readonly INPUT_INCOMPLETE = new ErrorType("All the fields in the form need to be completed", "");
  static readonly USERNAME_EXISTS = new ErrorType("The username selected already exists", "UsernameExistsException");
  static readonly INVALID_PASSWORD = new ErrorType("The password is invalid, please check the requirements", "InvalidPasswordException");

  private constructor(public readonly message: any, public readonly code: string) { }
}