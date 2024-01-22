import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

function ProductList({ products }) {
  return (
    <div className="px-4 flex flex-wrap justify-evenly items-start gap-4">
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
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
