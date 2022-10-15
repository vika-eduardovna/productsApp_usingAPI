import React from 'react'
import s from './style.module.sass'
import { faAngleDown, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function NavBar() {
  return (
    <div className={['wrapper', s.wrapper].join(' ')}>
      <p className={s.logo}>Funiro.</p>
      <ul className={s.list}>
        <li>Products <i><FontAwesomeIcon icon={faAngleDown} /></i></li>
        <li>Rooms <i><FontAwesomeIcon icon={faAngleDown} /></i></li>
        <li>Inspirations</li>
        <div className={s.input}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="search" name="search" placeholder='Search for minimalist chair...' />
        </div>
      </ul>

      <div className={s.icons}>
        <i><FontAwesomeIcon icon={faHeart} /></i>
        <i><FontAwesomeIcon icon={faCartShopping} /></i>
        <img src="https://cdn.britannica.com/11/215011-050-3127A07E/American-actor-Keanu-Reeves-2014.jpg" alt="avatar" />
      </div>
    </div>
  )
}
