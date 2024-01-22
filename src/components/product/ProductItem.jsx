import PropTypes from 'prop-types';

function ProductItem({ image, title, price }) {
  return (
    <div className="2xl:w-80 lg:w-60 sm:w-40 w-20 rounded-3xl transition hover:scale-105">
      <img className="w-full 2xl:h-80 lg:h-60 sm:h-40 h-20" src={image}></img>
      <h3 className="2xl:text-2xl md:text-sm sm:text-xs text-[8px] leading-[10px]">
        {title}
      </h3>
      <h4 className="2xl:text-2xl md:text-sm sm:text-xs text-[8px] leading-[10px]">{`$${price}`}</h4>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;
