import React from 'react'
import s from './style.module.sass'
import { addNewProd } from '../../requests/api_req'
import { useContext } from 'react'
import { Context } from '../../context'

export default function AddProductSection() {
  const { addProduct } = useContext(Context);

  const submit = e => {
    e.preventDefault();
    const { image, title, description, price } = e.target;
    addProduct({
      id: Date.now(),
      image: image.value,
      title: title.value,
      description: description.value,
      price: price.value
    },
      addNewProd);

    image.value = '';
    title.value = '';
    description.value = '';
    price.value = ''
  };

  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <form onSubmit={submit} className={s.form_style}>
        <input type="text" placeholder='Image link' name='image' />
        <input type="text" placeholder='Title' name='title' />
        <input type="text" placeholder='Description' name='description' />
        <input type="number" placeholder='price' name='price' />
        <button>Add product</button>
      </form>
    </div>
  )
}
