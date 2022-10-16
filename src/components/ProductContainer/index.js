import React from 'react'
import s from './style.module.sass'
import { useContext } from 'react'
import { Context } from '../../context'
import ProductItem from '../ProductItem/index'

export default function ProductContainer() {
  const { products } = useContext(Context);

  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <h3 className={s.subheader}>Our products</h3>
      <div className={s.products}>
        {
          products.map(el => <ProductItem key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
