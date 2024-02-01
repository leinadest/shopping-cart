import { useContext } from 'react';
import { CartContext } from '../../App';
import { ICartContext, Product } from '../../types/types';

interface CartItemProps {
  product: Product;
}

function CartItem({ product }: CartItemProps) {
  const { changeItemQuantity, removeFromCart } =
    useContext<ICartContext>(CartContext);

  const total = (product.price * product.quantity).toFixed(2);

  function handleQuantityButton(product: Product, change: number) {
    if (product.quantity + change > 0) changeItemQuantity(product, change);
  }

  return (
    <tr className="text-center">
      <td className="flex items-center">
        <img
          className="h-40 w-20 min-w-20 sm:w-40 sm:min-w-40 object-contain border-2 p-2 mr-4 rounded-xl"
          src={product.image}
        ></img>
        <p className="hidden md:block text-left">{product.title}</p>
      </td>
      <td>
        <p>{`$${product.price}`}</p>
      </td>
      <td>
        <div className="rounded-lg border-2 flex">
          <button
            className="flex-1"
            onClick={() => handleQuantityButton(product, -1)}
          >
            -
          </button>
          {product.quantity}
          <button
            className="flex-1"
            onClick={() => handleQuantityButton(product, 1)}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <p>{`$${total}`}</p>
      </td>
      <td>
        <button className="white-btn" onClick={() => removeFromCart(product)}>
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
