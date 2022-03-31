import React from 'react'

import Card from '../../components/cards/Card'
import ProductShortcut from '../../components/productShortcut/ProcuctShortcut'

import iconCore from '../../assets/mice/icon/core.svg'
import iconPro from '../../assets/mice/icon/pro.svg'
import iconHaste from '../../assets/mice/icon/haste.svg'
import iconSurge from '../../assets/mice/icon/surge.svg'
import iconRaid from '../../assets/mice/icon/raid.svg'
import iconDart from '../../assets/mice/icon/core.svg'

import imgHaste from '../../assets/mice/haste.webp'
import imgRaid from '../../assets/mice/raid.jpg'
import imgDart from '../../assets/mice/dart.jpg'
import imgSurge from '../../assets/mice/surge.jpg'
import imgPro from '../../assets/mice/pro.jpg'
import imgCore from '../../assets/mice/core.webp'

export default function Mice() {
    return (
        <section className="Mice">
            <section className="flex__container-cards">
                <ProductShortcut img={iconCore} description="Pulsefire Core"/>
                <ProductShortcut img={iconPro} description="Pulsefire FPS Pro"/>
                <ProductShortcut img={iconHaste} description="Pulsefire Haste"/>
                <ProductShortcut img={iconSurge} description="Pulsefire Surge"/>
                <ProductShortcut img={iconRaid} description="Pulsefire Raid"/>
                <ProductShortcut img={iconDart} description="Pulsefire Dart"/>
            </section>
            <section>
                <Card img={imgHaste} title="Pulsefire Haste" text="Mire mais rápido, jogue melhor." />
                <Card img={imgRaid} title="Pulsefire Raid" text="Domine o campo de batalha com esse mouse ultraleve programável de 11 botões." />
                <Card img={imgDart} title="Pulsefire Dart" text="Máxima precisão com total liberdade sem fio." />
                <Card img={imgSurge} title="Pulsefire Surge" text="Localização precisa combinada com iluminação RGB de 360°" />
                <Card img={imgPro} title="Pulsefire FPS Pro" text="Projetado para máximo desempenho, precisão e estilo em FPS." />
                <Card img={imgCore} title="Pulsefire Core" text="Mouse óptico gamer com iluminação RGB personalizável." />
            </section>
        </section>
    )
}