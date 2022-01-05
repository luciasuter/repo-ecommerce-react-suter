import React, { useEffect, useState, Fragment } from 'react';

import './TypeContainer.css'
import {useParams } from "react-router-dom";

// firebase
import {db} from '../../firebase/firebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";

import Item from '../Item/Item';

const TypeContainer = () => {

    const ParamsID = useParams()
    const [productsData, setProductsData] = useState([]);
    useEffect(()=>{
      const getProducts = async () => {
        const q = query(collection(db, "catalogo"), where('marca', '==', `${ParamsID.marca}`));
        const docs = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id});
        });
        setProductsData(docs);
      };
      getProducts()
  
    }, [ParamsID.marca])

  
  return (
    <Fragment>
        <div className='type_container'> 
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

