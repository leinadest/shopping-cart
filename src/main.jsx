import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products/:productId', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
