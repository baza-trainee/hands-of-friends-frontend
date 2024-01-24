export function splitName(fullName) {
  const parts = fullName.split(" ");
  if (parts.length !== 2) {
    return null;
  }

  return {
    firstName: parts[0],
    lastName: parts[1],
  };
}
