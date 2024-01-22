import Header from './components/common/Header';
import { Outlet } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext({ items: [], addToCart: () => {} });

function App() {
  const [items, setItems] = useState([]);

  function addToCart(product) {
    const newItem = { ...product, quantity: 1 };
    localStorage.setItem(product.id.toString(), JSON.stringify(newItem));
    setItems([...items, newItem]);
  }

  function changeItemQuantity(product, change) {
    const newItems = [...items];
    const itemToChange = newItems.find((item) => item.id === product.id);
    itemToChange.quantity += change;
    localStorage.setItem(
      itemToChange.id.toString(),
      JSON.stringify(itemToChange),
    );
    setItems(newItems);
  }

  function removeFromCart(product) {
    const newItems = [...items];
    const itemToRemove = newItems.find((item) => item.id === product.id);
    newItems.splice(newItems.indexOf(itemToRemove), 1);
    localStorage.removeItem(itemToRemove.id.toString());
    setItems(newItems);
  }

  useEffect(() => {
    const storedItems = [];
    Object.keys(localStorage).forEach((productId) => {
      storedItems.push(JSON.parse(localStorage.getItem(productId)));
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
