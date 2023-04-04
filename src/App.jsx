import { useEffect } from 'react';
import { useState } from 'react'
import { Context } from "./Context";
import Home from './Home';

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('../products.json');
      const data = await response.json();
      setState(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Context.Provider value={{state:state}}>
        <Home/>
      </Context.Provider>

    </>
  )
}

export default App
