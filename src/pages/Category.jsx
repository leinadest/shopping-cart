import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategory } from '../api/api';
import PropTypes from 'prop-types';
import ProductList from '../components/product/ProductList';

function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategory(categoryName).then((resolvedCategory) => {
      setProducts(resolvedCategory);
    });
  }, [categoryName]);

  return (
    <main>
      {products.length > 0 && products[0].category === categoryName && (
        <ProductList heading={categoryName} products={products}></ProductList>
      )}
    </main>
  );
}

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
