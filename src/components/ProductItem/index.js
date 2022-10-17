import React from 'react'
import s from './style.module.sass'
//import UnvisibleCard from '../UnvisibleCard/index'
//import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../context'



export default function ProductItem({id, image, title, description, price }) {
  const {removeProd} = useContext(Context);

  //const [hover, setHover] = useState(false);
  //const isHover = hover ? <UnvisibleCard/> : '';
 
  return (
    <div className={s.item} onDoubleClick={() => removeProd(id)}>
      <img src={image} alt="product photo" />
      <p className={s.title}>{title}</p>
      <p className={s.descr}>{description}</p>
      <p className={s.price}>{price}$</p>
    </div>
  )
}
