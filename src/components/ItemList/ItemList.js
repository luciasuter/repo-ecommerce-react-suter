import React, {Fragment} from 'react';
import Item from '../Item/Item';
import './ItemList.css'

const ItemList = ({ data }) => {
  return (
    <Fragment>
      {data.map((item) => {
        return <Item data={item} key={item.id} img={item.foto} />;
      })}
    </Fragment>
  );
};

export default ItemList;
