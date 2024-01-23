import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-autofit-sm gap-2 md:grid-cols-autofit-lg md:gap-4">
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
