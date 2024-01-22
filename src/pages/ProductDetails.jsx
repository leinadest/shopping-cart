import { useParams } from 'react-router-dom';
import { fetchProduct } from '../api/api';
import { useEffect, useState } from 'react';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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
            className="object-contain h-[min(70vh,_70vw)] w-[min(70vw,_70vh)]"
            src={product.image}
          ></img>
          <section className="flex flex-col flex-1 basis-1/3">
            <h2>{product.title}</h2>
            <h3 className="mt-1 mb-6 text-xl">{`$${product.price}`}</h3>
            <p className="mb-6">{product.description}</p>
            <p className="capitalize self-center">{`Category: ${product.category}`}</p>
            <p className="self-center">{`Rating: ${product.rating.rate} (${product.rating.count})`}</p>
            <button className="self-center mt-6 px-10 py-3 border-2 border-black rounded-lg transition hover:bg-black hover:text-white">
              Add to Cart
            </button>
          </section>
        </main>
      )}
    </>
  );
}

export default ProductDetails;
