import React from 'react'
import s from './style.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function MainSection() {
  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
       <img src="https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=2000" alt="" />

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
                <i><FontAwesomeIcon icon={faArrowRight}/></i>
            </div>
       </div>
    </div>
  )
}
