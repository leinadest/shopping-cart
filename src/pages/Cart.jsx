import { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';

function Cart() {
  const { items } = useContext(CartContext);

  const subtotal = items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <main className="flex flex-col bg-none">
      <h2 className="text-center mb-4">Cart</h2>

      <table className="w-full bg-white">
        <colgroup>
          <col></col>
          <col className="min-w-16 md:min-w-24" span="3"></col>
        </colgroup>
        <thead className="border-b-2">
          <tr>
            <th className="flex">Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        {items.length > 0 && (
          <tbody className="border-b-2">
            <tr className="h-4"></tr>
            {items.map((item) => (
              <CartItem key={item.id} product={item}></CartItem>
            ))}
            <tr className="h-4"></tr>
          </tbody>
        )}
      </table>
      <h3 className="my-6 ml-auto text-xl">{`Subtotal: $${subtotal}`}</h3>
      <div className="flex items-center justify-end gap-6">
        <Link className="text-blue-500 underline" to="/">
          Continue Shopping
        </Link>
        <button className="white-btn">Checkout</button>
      </div>
    </main>
  );
}

export default Cart;
