async function apiFetch<T>(input: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`http://localhost:4000${input}`, init);

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json() as Promise<T>;
}

export default apiFetch;
