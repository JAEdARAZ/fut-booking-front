export function allFieldsHaveValue(fields: string[]): boolean {
  for (const field of fields) {
    console.log(field);
    if (field === "") {
      return false;
    }
  }

  return true;
}