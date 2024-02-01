import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../api/api';
import ProductList from '../components/product/ProductList';
import { Product } from '../types/types';
import SlideInViewport from '../components/wrappers/SlideInViewport';

function Search() {
  const { productName } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((fetchedProducts) => setAllProducts(fetchedProducts));
  }, []);

  useEffect(() => {
    if (allProducts.length === 0) {
      return;
    }
    const matchingProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(productName as string),
    );
    if (matchingProducts.length > 0) setProducts(matchingProducts);
    else setProducts([]);
  }, [productName, allProducts]);

  return (
    <main>
      {allProducts.length > 0 &&
        (products.length > 0 ? (
          <>
            <h2 className="text-center mb-6">{`Search results for "${productName}"`}</h2>
            <SlideInViewport>
              <ProductList products={products}></ProductList>
            </SlideInViewport>
          </>
        ) : (
          <h2 className="text-center">{`No results for "${productName}"`}</h2>
        ))}
    </main>
  );
}

export default Search;
