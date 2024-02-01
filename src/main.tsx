import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/Home.js';
import ProductDetails from './pages/ProductDetails.js';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './pages/Cart.js';
import Category from './pages/Category.js';
import Search from './pages/Search.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products/:productId', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
      { path: '/categories/:categoryName', element: <Category /> },
      { path: '/search/:productName', element: <Search /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
