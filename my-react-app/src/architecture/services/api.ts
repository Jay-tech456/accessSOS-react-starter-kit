const BASE_URL = import.meta.env.VITE_API_URL ?? 'https://jsonplaceholder.typicode.com';

// Generic GET — T is the expected response shape
// Usage: const users = await api.get<User[]>('/users')
async function get<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

// Generic POST
async function post<T>(endpoint: string, body: unknown): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = { get, post };
