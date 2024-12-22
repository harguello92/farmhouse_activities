const BASE_URL = '';

export async function fetchData(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch failed: ${error.message}`);
  }
}
