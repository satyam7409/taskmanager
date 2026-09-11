export function getUsers() {
  return [];
}

export function createUser(name) {
  return {
    id: Date.now(),
    name,
  };
}