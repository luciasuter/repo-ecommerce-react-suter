import React, { Fragment } from 'react'
import './ItemListContainer.css'

//import Counter from "../Counter/Counter"  desafio N5
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer({greeting}) {
    return (
        <Fragment>
            <div className="greeting_msg">
            <span> {greeting} </span>
        </div>
        <ItemList/>
        </Fragment>
    )
}



/* version funcion flecha 
const  ItemListContainer = (props) => {
    return (
        <div className="greeting_msg">
            <span> {props.greeting} </span>
        </div>
    )
}

export default ItemListContainer */ 


/* version funcion flecha con props moderno
const  ItemListContainer = ({greeting, greeting2}) => {
    return (
        <div className="greeting_msg">
            <span> {greeting} </span>
            <span> {greeting2} </span>
        </div>
    )
}

export default ItemListContainer */ 