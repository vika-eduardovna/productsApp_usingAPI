import React from 'react'
import s from './style.module.sass'
import UnvisibleCard from '../UnvisibleCard/index'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../context'



export default function ProductItem({ id, image, title, description, price }) {
  const { removeProd } = useContext(Context);
  const [style, setStyle] = useState({ display: 'none' });

  return (
    <div
      className={s.item}
      onDoubleClick={() => removeProd(id)}
      onMouseEnter={e => setStyle({ display: 'block' })}
      onMouseLeave={e => setStyle({ display: 'none' })}>
      <img src={image} alt="product photo" />
      <p className={s.title}>{title}</p>
      <p className={s.price}>{price}$</p>
      <div style={style}>
        <button>Add to cart </button>
      </div>
    </div>
  )
}
