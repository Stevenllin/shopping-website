import axios from 'axios';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    (async () => {
      const response = (await axios.get('https://fakestoreapi.com/products/category/jewelery', {}));
      console.log(response);
    })()
  }, [])
  return (
    <p>Home</p>
  )
}

export default Home;
