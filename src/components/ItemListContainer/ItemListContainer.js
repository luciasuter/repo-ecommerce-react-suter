import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer(props) {
    return (
        <div className="greeting_msg">
            <span> {props.greeting} </span>
        </div>
    )
}
