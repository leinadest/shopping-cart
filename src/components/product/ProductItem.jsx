import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductItem({ image, title, price, id }) {
  return (
    <Link
      to={`/products/${id}`}
      className="h-fit 2xl:w-80 lg:w-60 sm:w-40 w-20 rounded-3xl transition hover:scale-105"
    >
      <img
        className="object-contain w-full 2xl:h-80 lg:h-60 sm:h-40 h-20"
        src={image}
      ></img>
      <h3 className="2xl:text-2xl md:text-sm sm:text-xs text-[8px] leading-[10px]">
        {title}
      </h3>
      <h4 className="2xl:text-2xl md:text-sm sm:text-xs text-[8px] leading-[10px]">{`$${price}`}</h4>
    </Link>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};

export default ProductItem;
