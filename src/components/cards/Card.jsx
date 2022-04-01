import React from 'react'

import cloudX from '../../assets/headsets/stinger.webp'

import Button from '../button/Button'

import './style/card.scss'

export default function Card(props) {

    return (
        <section className="card__products">
            <div className="card__products-container">
                <div>
                    <div className="containerImg">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="containerTitle padd-16">
                        <article>
                            <h1
                                className={props.titleLarge ? "titleLarge" : "title"}>
                                {props.title}
                            </h1>
                            <p>{props.text}</p>

                            <Button>Saiba mais</Button>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}