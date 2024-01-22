import ProductList from '../product/ProductList';
import PropTypes from 'prop-types';

function Main({ categories }) {
  return (
    <main>
      {Object.keys(categories).map((category, index) => (
        <section key={index}>
          <h2 className="text-center text-4xl m-10 capitalize">{category}</h2>
          <ProductList products={categories[category]} />
        </section>
      ))}
    </main>
  );
}

Main.propTypes = {
  categories: PropTypes.array,
};

export default Main;
