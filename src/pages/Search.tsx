import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import { Product } from '../types/types';
import SlideInViewport from '../components/wrappers/SlideInViewport';
import { ShopContext } from '../App';

function Search() {
  const { productName } = useParams();
  const { shopItems } = useContext(ShopContext);

  let products: Product[] = [];
  products = shopItems.filter((product) =>
    product.title.toLowerCase().includes(productName as string),
  );

  return (
    <main>
      {products.length > 0 ? (
        <>
          <h2 className="text-center mb-6">{`Search results for "${productName}"`}</h2>
          <SlideInViewport>
            <ProductList products={products}></ProductList>
          </SlideInViewport>
        </>
      ) : (
        <h2 className="text-center">{`No results for "${productName}"`}</h2>
      )}
    </main>
  );
}

export default Search;
