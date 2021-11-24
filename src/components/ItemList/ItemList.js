import React, {useEffect, useState} from 'react';
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = () => {
const [users, setUsers] = useState([]);

useEffect (()=>{
    fetch(
        "https://my-json-server.typicode.com/luciasuter/repo-ecommerce-react-suter/posts"
      )
        .then((response) => response.json())
        .then((json) => setUsers(json));
}, [])
    return (
        <div className="item-list">
            <h1>desafio n6</h1>
        <div className="items">
        {users.map((user) => {
        return <Item data={user} key={user.id} img ={user.foto}/>;
      })}
        </div>
        </div>
    )
}

export default ItemList;
