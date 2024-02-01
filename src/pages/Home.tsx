import ProductList from '../components/product/ProductList';
import { useContext } from 'react';
import SlideInViewport from '../components/wrappers/SlideInViewport';
import { ShopContext } from '../App';
import { Product, IShopContext } from '../types/types';

function Home() {
  const { shopItems } = useContext<IShopContext>(ShopContext);
  const categories: Record<string, Product[]> = {};

  shopItems.forEach((shopItem) => {
    if (categories[shopItem.category]) {
      categories[shopItem.category].push(shopItem);
    } else {
      categories[shopItem.category] = [shopItem];
    }
  });

  return (
    <main>
      {Object.keys(categories).map((category, index) => (
        <SlideInViewport key={index}>
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
