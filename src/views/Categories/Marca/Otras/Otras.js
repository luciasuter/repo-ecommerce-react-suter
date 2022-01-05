import React, { useEffect, useState } from 'react';
import Item from '../../../../components/Item/Item';
import '../../../../components/TypeContainer/TypeContainer.css'
import '../Marca.css'
import MarcaNavbar from '../../../../components/MarcaNavbar/MarcaNavbar'

// firebase
import { db } from '../../../../firebase/firebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";


const Otras = () => {
  const [productsData, setProductsData] = useState([]);
  console.log(productsData)
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "catalogo"), where('marca', 'not-in', ['Copic', 'Kuretake', 'Moleskine', 'Winsor Newton', 'Pilot', 'Uniball']));
      const docs = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
    };
    getProducts()

  }, [])

  return (
    <>
      <MarcaNavbar/>
      <div className='marca_container'>
        <div className='otras_container'> 
      {productsData.map((product) =>{
        return(
            <Item data={product} key={product.id}/>
        )
      })}
        </div>
      </div>
    </>
  )
}
export default Otras;