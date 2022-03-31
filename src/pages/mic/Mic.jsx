import React from 'react'

import Card from '../../components/cards/Card'
import ProductShortcut from '../../components/productShortcut/ProcuctShortcut'

import iconQuad from '../../assets/mic/icon/micQuad.svg'
import iconSolocast from '../../assets/mic/icon/micSolocast.svg'

import imgSolocast from '../../assets/mic/solocast.jpg'
import imgQuadcast from '../../assets/mic/quadCast.jpg'

export default function Mic(props) {
    return (
        <section className="mic">
            <div className="mic__container">
                <section className="flex__container-cards">
                    <ProductShortcut img={iconQuad} description="QuadCast S" />
                    <ProductShortcut img={iconSolocast} description="Solocast" />
                </section>
                <section>
                    <Card img={imgSolocast} title="HyperX SoloCast" text="Microfone USB fácil de usar para streamers e criadores de conteúdo." />
                    <Card img={imgQuadcast} title="HyperX QuadCast" text="Microfone independente completo para streamers, criadores de conteúdo e gamers."/>
                </section>
            </div>
        </section>
    )
}