const BASE_URL = 'https://fakestoreapi.com/products/';

async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export async function fetchCategory(category) {
  const data = await fetchData(`${BASE_URL}category/${category}`);
  return data;
}

export async function fetchProduct(productId) {
  const data = await fetchData(`${BASE_URL}${productId}`);
  return data;
}

export async function fetchCategoryNames() {
  const data = await fetchData(`${BASE_URL}categories`);
  return data;
}

export async function fetchCategories() {
  const categoryNames = await fetchCategoryNames();
  const categoryPromises = categoryNames.map((categoryName) =>
    fetchCategory(categoryName),
  );
  const categoryResolves = await Promise.all(categoryPromises);
  const newCategories = {};
  categoryResolves.forEach((categoryResolve, index) => {
    newCategories[categoryNames[index]] = categoryResolve;
  });
  return newCategories;
}
