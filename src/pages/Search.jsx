import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api/api';
import ProductList from '../components/product/ProductList';

function Search() {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((fetchedProducts) => setAllProducts(fetchedProducts));
  }, []);

  useEffect(() => {
    if (allProducts.length === 0) {
      return;
    }
    const matchingProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(productName),
    );
    if (matchingProducts.length > 0) setProducts(matchingProducts);
    else setProducts(null);
  }, [productName, allProducts]);

  return (
    <main>
      {products && products.length > 0 && (
        <ProductList
          heading={`Search results for "${productName}"`}
          products={products}
        ></ProductList>
      )}
      {products === null && (
        <h2 className="text-center">{`No results for "${productName}"`}</h2>
      )}
    </main>
  );
}

export default Search;
