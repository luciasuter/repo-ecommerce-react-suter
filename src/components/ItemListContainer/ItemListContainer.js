import React, { useEffect, useState } from 'react';

import Loading from '../Loading/Loading'
import './ItemList.css'
import { Link } from "react-router-dom";

// firebase
import {db} from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";

import Item from '../Item/Item';

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [productsData, setProductsData] = useState([]);
  useEffect(()=>{
    const getProducts = async () => {
      const q = query(collection(db, "catalogo"));
      const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id});
      });
      setProductsData(docs);
    };
    getProducts()

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
  }, [])
  
  return (
    <div className='item-list-container'>
      {isLoading ? <Loading/> : productsData.map((product) =>{
        return(
            <Item data={product} key={product.id}/>
        )
      })}
      
    </div>
  );
};


export default ItemListContainer;

