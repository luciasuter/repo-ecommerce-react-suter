import React, { useEffect, useState, Fragment } from 'react';

import './ItemList.css'
import {useParams } from "react-router-dom";

// firebase
import {db} from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";

import Item from '../Item/Item';

const TypeContainer = () => {
  const [itemData, setItemData] = useState([])
  const ParamsID = useParams()

  const ItemDataFilter = itemData.filter((product) => {
    return product.marca === ParamsID.marca})

    const [productsData, setProductsData] = useState([]);
    useEffect(()=>{
      const getProducts = async () => {
        const q = query(collection(db, "catalogo"), where('marca', '==', `${ParamsID.marca}`));
        const docs = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), marca:doc.marca});
        });
        setProductsData(docs);
      };
      getProducts()
  
    }, [ParamsID.marca])

  
  return (
    <Fragment>
        <div className='item-list-container'> 
      {productsData.map((product) =>{
        return(
            <Item data={product} key={product.id}/>
        )
      })}
    </div>
         
    </Fragment>
  );
};


export default TypeContainer;

