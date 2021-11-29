import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [itemIsLoading, setItemIsLoading] = useState(true);
    const params = useParams()

    useEffect(() => {
        axios.get(
          `https://my-json-server.typicode.com/luciasuter/repo-ecommerce-react-suter/posts/${params.id}`)
          .then((response) => response.data)
          .then((item) => setItem(item));
          setTimeout(() => {
            setItemIsLoading(false);
          }, 2000);
      }, [params.id]);

    return (
        <Fragment>
      <div className="ItemDetailContainer">
      {itemIsLoading ? <span>cargando elemento!!</span> :<ItemDetail item={item}/>}
      </div>
    </Fragment>
    )
}

export default ItemDetailContainer
