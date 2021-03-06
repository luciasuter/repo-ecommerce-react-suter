import React, { useEffect, useState, Fragment } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'
import Loading from '../Loading/Loading'

import {db} from '../../firebase/firebaseConfig'
import { collection, query, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [itemIsLoading, setItemIsLoading] = useState(true);
    const [itemData, setItemData] = useState([])

    let paramsID = useParams()
    const ItemDataFilter = itemData.filter((product) => {
      return product.id === paramsID.id})

    useEffect(() => {
      const getItem = async () =>{
        const q = query(collection(db, "catalogo"));
        const docs = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id:doc.id});
        });
        setItemData(docs);
      };
      getItem()

      setTimeout(() => {
        setItemIsLoading(false);
      }, 2000);
  }, [paramsID]); 

    return (
      <Fragment>
        <div className="ItemDetailContainer">
      {itemIsLoading ? <Loading/> : ItemDataFilter.map((item) =>{
        return <ItemDetail data={item} key={item.id}/>
      })}
      </div>
         
    </Fragment>
    )
}

export default ItemDetailContainer

