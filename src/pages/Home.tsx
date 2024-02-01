import ProductList from '../components/product/ProductList';
import { fetchCategories } from '../api/api';
import { useState, useEffect } from 'react';
import SlideInViewport from '../components/wrappers/SlideInViewport';

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
        <SlideInViewport>
          <h2 className=" text-center m-10 capitalize">{category}</h2>
          <ProductList
            key={index}
            products={categories[category as keyof object]}
          />
        </SlideInViewport>
      ))}
    </main>
  );
}

export default Home;
