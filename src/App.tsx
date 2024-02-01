import Header from './components/common/Header';
import { Outlet } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import { Product, ICartContext } from './types/types';

export const CartContext = createContext<ICartContext>({
  items: [],
  addToCart: () => null,
  changeItemQuantity: () => null,
  removeFromCart: () => null,
} as const);

function App() {
  const [items, setItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const newItem = { ...product, quantity: 1 };
    localStorage.setItem(product.id.toString(), JSON.stringify(newItem));
    setItems([...items, newItem]);
  }

  function changeItemQuantity(product: Product, change: number) {
    const newItems = [...items];
    const itemToChange: Product = newItems.find(
      (item) => item.id === product.id,
    ) as Product;
    itemToChange.quantity += change;
    localStorage.setItem(
      itemToChange.id.toString(),
      JSON.stringify(itemToChange),
    );
    setItems(newItems);
  }

  function removeFromCart(product: Product) {
    const newItems = [...items];
    const itemToRemove = newItems.find(
      (item) => item.id === product.id,
    ) as Product;
    newItems.splice(newItems.indexOf(itemToRemove), 1);
    localStorage.removeItem(itemToRemove.id.toString());
    setItems(newItems);
  }

  useEffect(() => {
    const storedItems: Product[] = [];
    Object.keys(localStorage).forEach((productId) => {
      storedItems.push(JSON.parse(localStorage.getItem(productId) as string));
    });
    setItems(storedItems);
  }, []);

  return (
    <CartContext.Provider
      value={{ items, addToCart, changeItemQuantity, removeFromCart }}
    >
      <Header />
      <Outlet />
    </CartContext.Provider>
  );
}

export default App;
