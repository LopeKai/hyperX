import React from 'react'

import ProductShortcut from '../../components/productShortcut/ProcuctShortcut'
import Card from '../../components/cards/Card'

import iconCloudEarbuds from '../../assets/earbuds/icons/cloudEarbuds.svg'
import iconCloudBuds from '../../assets/earbuds/icons/cloudBuds.svg'

import imgCloud from '../../assets/earbuds/cloud.jpg'
import imgCloud2 from '../../assets/earbuds/cloud2.jpg'

import './style/earbuds.scss'

export default function Earbuds() {
    return (
        <section className="earbuds">
            <div className="earbuds__container">
                <section className="earbuds__container-shortcut flex__container-cards">
                    <ProductShortcut img={iconCloudEarbuds} description="Cloud Earbuds" />
                    <ProductShortcut img={iconCloudBuds} description="Cloud Buds" />
                </section>

                <section>
                    <Card
                        img={imgCloud }
                        title="HyperX Cloud Buds Fones de Ouvido Wireless"
                        text="Fones de ouvido Earbuds Wireless Bluetooth® para pessoas em movimento"
                    />

                     <Card
                        img={imgCloud2}
                        title="HyperX Cloud Earbuds"
                        text="Áudio para jogos em qualquer lugar, confortável e sem problema"
                    />
                </section>
            </div>
        </section>
    )
}