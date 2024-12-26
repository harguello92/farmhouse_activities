export interface ErrorMessageStructure {
  attribute: string;
  message: string;
  description: string;
}

export class ErrorMessages {
  errors: ErrorMessageStructure[];

  constructor() {
    this.errors = [];
  }

  getErrorMessage(attribute: string) {
    return this.errors.find((error) => error.attribute === attribute);
  }

  getAllErrorMessages() {
    return this.errors;
  }

  addError(attribute: string, message: string, description: string) {
    this.errors.push({ attribute, message, description });
  }

  hasErrors() {
    return this.errors.length > 0;
  }
}
