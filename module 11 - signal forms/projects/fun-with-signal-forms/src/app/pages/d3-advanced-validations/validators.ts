import { customError, SchemaPath, validate } from '@angular/forms/signals';

export function capitalized(path: SchemaPath<string>) {
  validate(path, (x) => {
    // check if the first letter is uppercase
    const value = x.value();
    if (value.length === 0) {
      return undefined;
    }
    const firstLetter = value.charAt(0);
    if (firstLetter === firstLetter.toUpperCase()) {
      return undefined;
    }

    return customError({
      kind: 'first-letter-uppercase',
      message: 'The first letter must be uppercase',
    });
  });
}
