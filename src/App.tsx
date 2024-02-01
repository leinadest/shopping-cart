import Header from './components/common/Header';
import { Outlet } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import { Product, IShopContext } from './types/types';
import { fetchProducts } from './api/api';

export const ShopContext = createContext<IShopContext>({
  shopItems: [],
  cartItems: [],
  addToCart: () => null,
  changeItemQuantity: () => null,
  removeFromCart: () => null,
} as const);

const shopItemsPromise = fetchProducts();

function App() {
  const [shopItems, setShopItems] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const newItem = { ...product, quantity: 1 };
    localStorage.setItem(product.id.toString(), JSON.stringify(newItem));
    setCartItems([...cartItems, newItem]);
  }

  function changeItemQuantity(product: Product, change: number) {
    const newItems = [...cartItems];
    const itemToChange: Product = newItems.find(
      (item) => item.id === product.id,
    ) as Product;
    itemToChange.quantity += change;
    localStorage.setItem(
      itemToChange.id.toString(),
      JSON.stringify(itemToChange),
    );
    setCartItems(newItems);
  }

  function removeFromCart(product: Product) {
    const newItems = [...cartItems];
    const itemToRemove = newItems.find(
      (item) => item.id === product.id,
    ) as Product;
    newItems.splice(newItems.indexOf(itemToRemove), 1);
    localStorage.removeItem(itemToRemove.id.toString());
    setCartItems(newItems);
  }

  useEffect(() => {
    shopItemsPromise.then((response) => setShopItems(response));

    const storedItems: Product[] = [];
    Object.keys(localStorage).forEach((productId) => {
      storedItems.push(JSON.parse(localStorage.getItem(productId) as string));
    });
    setCartItems(storedItems);
  }, []);

  return (
    <ShopContext.Provider
      value={{
        shopItems: shopItems,
        cartItems: cartItems,
        addToCart,
        changeItemQuantity,
        removeFromCart,
      }}
    >
      <Header />
      <Outlet />
    </ShopContext.Provider>
  );
}

export default App;
