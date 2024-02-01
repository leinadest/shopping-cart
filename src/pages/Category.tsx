import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import { IShopContext } from '../types/types';
import SlideInViewport from '../components/wrappers/SlideInViewport';
import { ShopContext } from '../App';

function Category() {
  const { categoryName } = useParams();
  const { shopItems } = useContext<IShopContext>(ShopContext);

  const products = shopItems.filter(
    (shopItem) => shopItem.category === categoryName,
  );

  return (
    <main>
      {products.length > 0 && products[0].category === categoryName && (
        <SlideInViewport>
          <h2 className=" text-center m-10 capitalize">{categoryName}</h2>
          <ProductList products={products}></ProductList>
        </SlideInViewport>
      )}
    </main>
  );
}

export default Category;
