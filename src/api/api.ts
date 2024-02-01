const BASE_URL = 'https://fakestoreapi.com/products/';

async function fetchData(url: string, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message);
    throw error;
  }
}

export async function fetchProducts() {
  return await fetchData(BASE_URL);
}
