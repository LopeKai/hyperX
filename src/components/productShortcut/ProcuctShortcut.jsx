import React from 'react'

import icon from '../../assets/headsets/icons/acessories.svg'

import './style/productShortcut.scss'

export default function ProductShortcut(props) {
    return (
        <div className="product__shortcut-card">
            <a href="/">
                <img src={props.img} alt="Headset Cloud Stinger" />
            </a>
            <div className="shortcut-containerTitle">
                <a href="/">{props.description}</a>
            </div>
        </div>
    )
}