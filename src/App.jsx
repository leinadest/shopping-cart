// import { useState } from 'react';
import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Main from './components/common/Main';
import { fetchCategories } from './api/api';

const categoriesRequest = fetchCategories();

function App() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    categoriesRequest.then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <>
      <Header categoryNames={Object.keys(categories)} />
      <Main categories={categories} />
    </>
  );
}

export default App;
