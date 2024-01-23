import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
import { useState, useEffect, useReducer } from 'react';
import { useInView } from 'react-intersection-observer';

function ProductList({ heading, products }) {
  const [visible, setVisible] = useState(false);
  const [prevHeading, dispatch] = useReducer(() => heading, '');
  const [ref, inView] = useInView();

  useEffect(() => {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
      dispatch();
    }, 500);
  }, [heading]);

  useEffect(() => {
    if (inView) setVisible(true);
    else setVisible(false);
  }, [inView]);

  return (
    <section
      className={`duration-500 ${visible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}
    >
      {prevHeading !== '' && heading !== prevHeading ? (
        <h2 className=" text-center m-10 capitalize">{prevHeading}</h2>
      ) : (
        <h2 className=" text-center m-10 capitalize">{heading}</h2>
      )}
      <div
        ref={ref}
        className="grid grid-cols-autofit-sm gap-2 md:grid-cols-autofit-lg md:gap-4"
      >
        {products.map((product) => (
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

ProductList.propTypes = {
  heading: PropTypes.string,
  products: PropTypes.array,
};

export default ProductList;
