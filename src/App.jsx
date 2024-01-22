// import { useState } from 'react';
import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import { fetchCategories } from './api/api';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
