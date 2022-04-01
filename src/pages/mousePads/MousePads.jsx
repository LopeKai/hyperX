import React from 'react'

import Card from '../../components/cards/Card'
import ProductShortcut from '../../components/productShortcut/ProcuctShortcut'

import iconFuryS from '../../assets/mousePads/icon/furyS.svg'
import iconFury from '../../assets/mousePads/icon/fury.svg'
import iconPulsefire from '../../assets/mousePads/icon/pulsefire.svg'

import imgFuryUltra from '../../assets/mousePads/furyUltra.jpg'
import imgFuryS from '../../assets/mousePads/furyS.jpg'
import imgFurySEdicaoSpeed from '../../assets/mousePads/furySEdicaoSpeed.jpg'

export default function MousePads() {
    return (
        <section className="mousePads">
            <div className="mousePads__container">
                <section className="flex__container-cards">
                    <ProductShortcut img={iconFuryS} description="FURY S"/>
                    <ProductShortcut img={iconFury} description="FURY Ultra"/>
                    <ProductShortcut img={iconPulsefire} description="Pulsefire Mat RGB"/>
                </section>
                <section>
                    <Card img={imgFuryUltra} title="FURY Ultra" text="Mouse pad com superfície rígida com iluminação RGB de 360°."/>
                    <Card img={imgFuryS} title="FURY S" text="Com costuras e texturas perfeitas para maior precisão ou velocidade"/>
                    <Card img={imgFurySEdicaoSpeed} title="Fury S (Edição Speed)" text="Com costuras e texturas perfeitas para maior precisão ou velocidade."/>
                </section>
            </div>
        </section>
    )
}