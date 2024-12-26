const BASE_URL = '';

export async function fetchData(endpoint: string, options = {}) {
  const controller = new AbortController();
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      signal: controller.signal
    });

    const JSONresponse = await response.json();


    if (!response.ok && !JSONresponse.errors) {
      throw new Error(response.statusText);
    }

    return {
      errors: JSONresponse.errors || [],
      data: JSONresponse.data || {}
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Fetch failed: ${error.message}`);
    }
  }
}
