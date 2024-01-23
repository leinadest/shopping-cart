import { useParams } from 'react-router-dom';
import { fetchProduct } from '../api/api';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../App';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { items, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetchProduct(productId).then((productResolve) => {
      setProduct(productResolve);
    });
  }, [productId]);

  return (
    <>
      {product && (
        <main className="flex flex-wrap items-center gap-8 justify-evenly">
          <img
            className="px-2 bg-white rounded-2xl object-contain h-[min(70vh,_70vw)] w-[min(70vw,_70vh)]"
            src={product.image}
          ></img>
          <section className="flex flex-col flex-1 basis-1/3">
            <h2>{product.title}</h2>
            <h3 className="mt-1 mb-6 text-xl">{`$${product.price}`}</h3>
            <p className="mb-6">{product.description}</p>
            <p className="capitalize self-center">{`Category: ${product.category}`}</p>
            <p className="self-center">{`Rating: ${product.rating.rate} (${product.rating.count})`}</p>
            {items.find((item) => item.id.toString() === productId) ? (
              <button
                onClick={() => removeFromCart(product)}
                className="self-center mt-6 px-10 py-3 border-2 border-black rounded-lg transition hover:bg-black hover:text-white"
              >
                ✓ Added to Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="self-center mt-6 px-10 py-3 border-2 border-black rounded-lg transition hover:bg-black hover:text-white"
              >
                Add to Cart
              </button>
            )}
          </section>
        </main>
      )}
    </>
  );
}

export default ProductDetails;
