import React from 'react'
import s from './style.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function MainSection() {
  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
       <img src="https://cdn.mytrendingstories.com/image/upload/v1631974794/gbkvbbk2kbis87db3rec.jpg" alt="" />

       <div className={s.shop_now}>
            <h2>High-Quality Accessories Just For You</h2>
            <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
            <button>Shop now</button>
       </div>

       <div className={s.sofa}>
            <h4>Aviator</h4>
            <span>Luxury sunglasses</span>
            <div className={s.icon}>
                <span>Only today 169$</span>
                <FontAwesomeIcon icon={faArrowRight} className={s.arrow}/>
            </div>
       </div>
    </div>
  )
}
