import React from 'react'
import s from './style.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faHandshake, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons'


export default function Services() {
    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            <div className={s.box}>
                <i><FontAwesomeIcon icon={faTrophy} /></i>
                <div>
                    <p>High Quality</p>
                    <span>crafted from top materials</span>
                </div>
            </div>
            <div className={s.box}>
                <i><FontAwesomeIcon icon={faHandshake} /></i>
                <div>
                    <p>Warranty Protection</p>
                    <span>Over 2 years</span>
                </div>
            </div>
            <div className={s.box}>
                <i><FontAwesomeIcon icon={faTruck} /></i>
                <div>
                    <p>Free Shipping</p>
                    <span>Order over 150 $</span>
                </div>
            </div>
            <div className={s.box}>
                <i><FontAwesomeIcon icon={faHeadset} /></i>
                <div>
                    <p>24 / 7 Support</p>
                    <span>Dedicated support</span>
                </div>
            </div>
        </div>
    )
}
