import React, { useEffect } from 'react';
import apiService from '../../api/services/apiService';

const Home: React.FC = () => {
  useEffect(() => {
    (async () => {
      const response = await apiService.getProducts();
      console.log(response);
    })()
  }, [])
  return (
    <p>Home</p>
  )
}

export default Home;
