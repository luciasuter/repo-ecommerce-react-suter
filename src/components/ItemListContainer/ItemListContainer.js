import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(
      'https://my-json-server.typicode.com/luciasuter/repo-ecommerce-react-suter/posts/')
      .then((response) => response.data)
      .then((items) => setItems(items));
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  }, []);
  return (
    <div className='item-list-container'>
      {isLoading ? <span>cargando!!</span> : <ItemList data={items} />}
      
    </div>
  );
};


export default ItemListContainer;

