import React from 'react'
import s from './style.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

export default function UnvisibleCard() {
  return (
    <div className={s.icons_hover}>
          <i> <FontAwesomeIcon icon={faShareNodes} />Share</i>
          <i> <FontAwesomeIcon icon={faHeart} />Like</i>
        </div>
  )
}
