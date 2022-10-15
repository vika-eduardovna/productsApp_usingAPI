import React from 'react'
import s from './style.module.sass'

export default function ProductContainer() {
  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <h3 className={s.subheader}>Our products</h3>
    </div>
  )
}
