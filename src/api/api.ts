const BASE_URL = 'https://fakestoreapi.com/products/';

async function fetchData(url: string, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export async function fetchCategory(category: string) {
  const data = await fetchData(`${BASE_URL}category/${category}`);
  return data;
}

export async function fetchProduct(productId: string) {
  const data = await fetchData(`${BASE_URL}${productId}`);
  return data;
}

export async function fetchCategoryNames() {
  const data = await fetchData(`${BASE_URL}categories`);
  return data;
}

export async function fetchCategories() {
  const categoryNames: string[] = await fetchCategoryNames();
  const categoryPromises = categoryNames.map((categoryName: string) =>
    fetchCategory(categoryName),
  );
  const categoryResolves = await Promise.all(categoryPromises);
  const newCategories: object = {};
  categoryResolves.forEach((categoryResolve, index) => {
    newCategories[categoryNames[index] as keyof object] =
      categoryResolve as keyof object;
  });
  return newCategories;
}

export async function fetchProducts() {
  return await fetchData(BASE_URL);
}
