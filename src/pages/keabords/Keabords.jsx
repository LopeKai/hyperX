import React from 'react'

import ProductShortcut from '../../components/productShortcut/ProcuctShortcut'
import Card from '../../components/cards/Card'

import iconMarsRgb from '../../assets/keyboard/icon/mars.svg'
import iconAlloyCore from '../../assets/keyboard/icon/alloyCore.svg'
import iconAlloyFpsPro from '../../assets/keyboard/icon/alloyFpsCore.svg'
import iconAlloyFpsRgb from '../../assets/keyboard/icon/alloyFpsRgb.svg'
import iconAlloyOrigins60 from '../../assets/keyboard/icon/alloyOrigins60.svg'
import iconAlloyOriginsCore from '../../assets/keyboard/icon/alloyOriginsCore.svg'
import iconAlloyOrigins from '../../assets/keyboard/icon/alloyOrigins.svg'
import iconAlloyElite2 from '../../assets/keyboard/icon/alloyElite2.svg'
import iconAcessories from '../../assets/keyboard/icon/acessories.svg'

import imgAlloyOrigins60 from '../../assets/keyboard/alloyOrigin60.jpg'
import imgAlloyElite2 from '../../assets/keyboard/alloyElite2.jpg'
import imgAlloyOriginCore from '../../assets/keyboard/alloyOriginCore.jpg'
import imgAlloyOrigins from '../../assets/keyboard/alloyOrigins.jpg'
import imgAlloyFpsRgb from '../../assets/keyboard/alloyFpsRgb.jpg'
import imgMarsRgb from '../../assets/keyboard/marsRgb.jpg'
import imgAlloyCoreRgb from '../../assets/keyboard/alloyCoreRgb.jpg'
import imgAlloyEliteRgb from '../../assets/keyboard/alloyEliteRgb.jpg'



export default function Keabords(props) {
    return (
        <section className="keabords">
            <div className="keabords__container">
                <section className="flex__container-cards">
                    <ProductShortcut img={iconMarsRgb} description="Mars RGB" />
                    <ProductShortcut img={iconAlloyCore} description="Alloy Core RGB" />
                    <ProductShortcut img={iconAlloyFpsPro} description=" Alloy FPS Pro" />
                    <ProductShortcut img={iconAlloyFpsRgb} description="Alloy FPS RGB" />
                    <ProductShortcut img={iconAlloyOrigins60} description=" Alloy Origins 60" />
                    <ProductShortcut img={iconAlloyOriginsCore} description="Alloy Origins Core" />
                    <ProductShortcut img={iconAlloyOrigins} description="Alloy Origins" />
                    <ProductShortcut img={iconAlloyElite2} description="Alloy Elite 2" />
                    <ProductShortcut img={iconAcessories} description="Acessórios" />
                </section>
                <section>
                    <Card img={imgAlloyOrigins60} title="Alloy Origins 60" text="Faça espaço para mais gaming."/>
                    <Card img={imgAlloyElite2} title="Alloy Elite 2" text="Para jogar. Para trabalhar. Para tudo."/>
                    <Card img={imgAlloyOriginCore} title="Alloy Origins Core" text="Teclado com menos dez teclas apresentando chaves de tecla HyperX customizadas."/>
                    <Card img={imgAlloyOrigins} title="Alloy Origins" text="Teclado compacto apresentando chaves de tecla HyperX exclusivas."/>
                    <Card img={imgAlloyFpsRgb} title="Alloy FPS RGB" text="Impressionante iluminação RGB com efeitos dinâmicos em um modelo compacto."/>
                    <Card img={imgMarsRgb} title="Mars RGB" text="Impressionante iluminação RGB em uma estrutura moderna."/>
                    <Card img={imgAlloyCoreRgb} title="Alloy Core RGB" text="Barra luminosa exclusiva HyperX e estilo RGB para gamers hardcore."/>
                    <Card img={imgAlloyEliteRgb} title="Alloy Elite RGB" text="Barra de luz radiante exclusiva proporciona brilho inigualável."/>
                </section>
            </div>
        </section>
    )
}