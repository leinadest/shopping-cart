import ProductItem from './ProductItem';
import { useState, useEffect, useReducer } from 'react';
import { useInView } from 'react-intersection-observer';
import { Product } from '../../types/types';

interface ProductListProps {
  heading: string;
  products: Product[];
}

function ProductList({ heading, products }: ProductListProps) {
  const [visible, setVisible] = useState(false);
  const [prevState, dispatch] = useReducer(() => ({ heading, products }), {
    heading: '',
    products: [],
  });
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!visible) return;
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
      dispatch();
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heading]);

  useEffect(() => {
    if (inView) setVisible(true);
    else setVisible(false);
  }, [inView]);

  return (
    <section
      className={`duration-500 ${visible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}
    >
      {prevState.heading !== '' && heading !== prevState.heading ? (
        <h2 className=" text-center m-10 capitalize">{prevState.heading}</h2>
      ) : (
        <h2 className=" text-center m-10 capitalize">{heading}</h2>
      )}
      <div
        ref={ref}
        className="grid grid-cols-autofit-sm gap-2 md:grid-cols-autofit-lg md:gap-4"
      >
        {prevState.products.length > 0 && products !== prevState.products
          ? prevState.products.map((product) => (
              <ProductItem
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            ))
          : products.map((product) => (
              <ProductItem
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                id={product.id}
              />
            ))}
      </div>
    </section>
  );
}

export default ProductList;
