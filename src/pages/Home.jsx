import ProductList from '../components/product/ProductList';
import { fetchCategories } from '../api/api';
import { useState, useEffect } from 'react';

const categoriesRequest = fetchCategories();

function Home() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    categoriesRequest.then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <main>
      {Object.keys(categories).map((category, index) => (
        <ProductList
          key={index}
          heading={category}
          products={categories[category]}
        />
      ))}
    </main>
  );
}

export default Home;
