import React from 'react'
import s from './style.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function MainSection() {
  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
       <img src="https://karpentree.com/pub/media/wysiwyg/Picture13.png" alt="" />

       <div className={s.shop_now}>
            <h2>High-Quality Furniture Just For You</h2>
            <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
            <button>Shop now</button>
       </div>

       <div className={s.sofa}>
            <h4>Bohauss</h4>
            <span>Luxury big sofa 2-seat</span>
            <div className={s.icon}>
                <span>Only today 1699$</span>
                <FontAwesomeIcon icon={faArrowRight} className={s.arrow}/>
            </div>
       </div>
    </div>
  )
}
