import React from 'react'

import Card from '../../components/cards/Card'
import ProductShortcut from '../../components/productShortcut/ProcuctShortcut'

import iconChargeXbox from '../../assets/power/icon/chargeXbox.svg'
import iconChargePs4 from '../../assets/power/icon/chargePs4.svg'
import iconChargeQuad from '../../assets/power/icon/chargeQuad.svg'
import iconChargeClutch from '../../assets/power/icon/chargeClutch.svg'
import iconChargeMovel from '../../assets/power/icon/chargeMovel.svg'

import imgMovel from '../../assets/power/movel.jpg'
import imgNintendo from '../../assets/power/nintendo.jpg'
import imgXbox from '../../assets/power/xbox.jpg'
import imgPs4 from '../../assets/power/ps4.jpg'
import imgQuad from '../../assets/power/quad.jpg'

import './style/power.scss'

export default function Power() {
    return (
        <section className="power">
            <div className="power__container">
                <section>
                    <div className="flex__container-cards">
                        <ProductShortcut img={iconChargeXbox} description="ChargePlay Dou(Xbox)" />
                        <ProductShortcut img={iconChargePs4} description="ChargePlay Dou(PS4)" />
                        <ProductShortcut img={iconChargeQuad} description="ChargePlay Quad" />
                        <ProductShortcut img={iconChargeClutch} description="ChargePlay Clutch" />
                        <ProductShortcut img={iconChargeMovel} description="ChargePlay Clutch para dispositivo móvel" />
                    </div>
                    <div className="consoles">
                        <div className="consoles-container">
                            <span>Encontre</span>
                            <ul>
                                <li>
                                    <a href="#">Xbone One</a>
                                </li>
                                <li>
                                    <a href="#">Ps4</a>
                                </li>
                                <li>
                                    <a href="#">Nintendo Switch</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Card img={imgMovel} title="Maior segurança. Melhor jogabilidade." text="" />
                    <Card img={imgNintendo} title="Maior vida útil da bateria para Nintendo Switch™." text="" />
                    <Card img={imgXbox} title="ChargePlay Duo para Xbox" text="Carregue. Jogue. Repita." />
                    <Card img={imgPs4} title="ChargePlay Duo (PS4)" text="Carregue. Jogue. Repita." />
                    <Card img={imgQuad } title="ChargePlay Quad" text="Carregue. Jogue. Repita." />
                </section>
            </div>
        </section>
    )
}