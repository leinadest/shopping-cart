import ProductItem from './ProductItem';

import { Product } from '../../types/types';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <section>
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
    </section>
  );
}

export default ProductList;
