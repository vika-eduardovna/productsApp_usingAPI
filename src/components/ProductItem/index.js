import React from 'react'
import s from './style.module.sass'
import UnvisibleCard from '../UnvisibleCard/index'
import { useState } from 'react'



export default function ProductItem({ id, image, title, description, price }) {

  const [hover, setHover] = useState(false);

  return (
    <div className={s.item} onMouseMove={() => setHover}>
      <img src={image} alt="product photo" />
      <p className={s.title}>{title}</p>
      <p className={s.descr}>{description}</p>
      <p className={s.price}>{price}$</p>
      <UnvisibleCard />
    </div>
  )
}
