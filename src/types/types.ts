export interface Product {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICartContext {
  items: Product[];
  addToCart: (product: Product) => void;
  changeItemQuantity: (product: Product, change: number) => void;
  removeFromCart: (product: Product) => void;
}
