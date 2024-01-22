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
        <section key={index}>
          <h2 className="text-center m-10 capitalize">{category}</h2>
          <ProductList products={categories[category]} />
        </section>
      ))}
    </main>
  );
}

export default Home;
