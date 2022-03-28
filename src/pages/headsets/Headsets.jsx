import React from 'react'

import iconStinger from '../../assets/headsets/icons/cloud-stinger.svg'
import iconCore from '../../assets/headsets/icons/cloud-core.svg'
import iconAlphaS from '../../assets/headsets/icons/cloud-alphaS.svg'
import iconRevolver from '../../assets/headsets/icons/cloud-revolver.svg'
import iconFlight from '../../assets/headsets/icons/cloud-flight.svg'
import iconOrbit from '../../assets/headsets/icons/cloud-orbit.svg'
import iconMix from '../../assets/headsets/icons/cloud-mix.svg'
import iconAcessories from '../../assets/headsets/icons/acessories.svg'

import Card from '../../components/cards/Card'
import headsetStinger from '../../assets/headsets/stinger.webp'
import headsetFlight from '../../assets/headsets/flight.jpg'
import headsetBuds from '../../assets/headsets/buds.jpg'
import headsetWireless from '../../assets/headsets/wireless.jpg'
import headsetStingerS from '../../assets/headsets/stingerS.webp'
import headsetCore from '../../assets/headsets/core.jpg'
import headsetAlphaS from '../../assets/headsets/alphaS.jpg'
import headsetCloudX from '../../assets/headsets/cloudX.jpg'
import headsetMix from '../../assets/headsets/mix.jpg'
import headsetOrbit from '../../assets/headsets/orbit.webp'

import cloudProduct from '../../assets/headsets/products/xbox/cloudProduct.webp'
import cloudXProduct from '../../assets/headsets/products/xbox/cloudXProduct.webp'
import stingerProduct from '../../assets/headsets/products/xbox/stingerProduct.webp'
import coreProduct from '../../assets/headsets/products/xbox/coreProduct.webp'
import chargeProduct from '../../assets/headsets/products/xbox/chargeProduct.webp'

import alphaProduct from '../../assets/headsets/products/pc/alphaProduct.webp'
import flightProduct from '../../assets/headsets/products/pc/flightProduct.png'
import flightSProduct from '../../assets/headsets/products/pc/flightSProduct.png'
import mixProduct from '../../assets/headsets/products/pc/mixProduct.webp'

import './style/headsets.scss'

export default function Headsets(props) {
    return (
        <div className="headsets">
            <div className="headsets__container">

                <section className="headsets__container-shortcut">
                    <div className="headsets__cards">
                        <div className="headsets__cards-card">
                            <img src={iconStinger} alt="Headset Cloud Stinger" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Cloud Stinger</a>
                            </div>
                        </div>
                        <div className="headsets__cards-card">
                            <img src={iconCore} alt="Headset Cloud Core" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Cloud</a>
                                <a href="/">Cloud Core Wireless</a>
                            </div>
                        </div>
                        <div className="headsets__cards-card">
                            <img src={iconAlphaS} alt="Headset Cloud Alpha S" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Cloud Alpha S</a>
                                <a href="/">Cloud Alpha</a>
                            </div>
                        </div>
                        <div className="headsets__cards-card">
                            <img src={iconRevolver} alt="Headset Cloud Revolver" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Cloud Revolver</a>
                            </div>
                        </div>
                        <div className="headsets__cards-card">
                            <img src={iconFlight} alt="Headset Cloud Flight S" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Cloud Flight S</a>
                                <a href="/">Cloud Flight</a>
                            </div>
                        </div>
                        <div className="headsets__cards-card">
                            <img src={iconOrbit} alt="Cloud Orbit" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Cloud Orbit</a>
                            </div>
                        </div>
                        <div className="headsets__cards-card">
                            <img src={iconMix} alt="Cloud Mix" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Cloud MIX</a>
                            </div>
                        </div>
                        <div className="headsets__cards-card">
                            <img src={iconAcessories} alt="Acessories" />
                            <div className="shortcut-containerTitle">
                                <a href="/">Acessories</a>
                            </div>
                        </div>
                    </div>
                    <div className="headsets__consoles">
                        <div className="headsets__consoles-container">
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
                    <Card
                        img={headsetStinger}
                        title="HyperX CloudX Stinger Core Wireless Gaming Headset"
                        text="Complete Wireless Freedom for Xbox"
                    />

                    <Card
                        img={headsetFlight}
                        title="HyperX Cloud Flight"
                        text="Liberdade sem fio com longa vida útil da bateria para PS5 e PS4"
                    />

                    <Card
                        img={headsetBuds}
                        title="HyperX Cloud Buds"
                        text="Fones de ouvido Earbuds Wireless Bluetooth® para pessoas em movimento."
                    />

                    <Card
                        img={headsetWireless}
                        title="Cloud II Wireless"
                        titleLarge
                        text="O conforto reconhecido, agora wireless"
                    />

                    <Card
                        img={headsetStingerS}
                        title="Cloud Stinger S incluindo som surround virtual 7.1"
                    />

                    <Card
                        img={headsetCore}
                        title="Cloud Stinger Core - Headset Gamer Wireless"
                        text="Pronto para jogar: Sem fio"
                    />

                    <Card
                        img={headsetAlphaS}
                        title="Cloud Alpha S"
                        text="Evoluiu com som surround e grave ajustável."
                    />

                    <Card
                        img={headsetCloudX}
                        title="CloudX Flight"
                        text="A liberdade confiável sem fio com longa vida útil da bateria"
                    />

                    <Card
                        img={headsetMix}
                        title="Cloud MIX"
                        text="Jogue onde quiser."
                    />

                    <Card
                        img={headsetOrbit}
                        title="Cloud Orbit"
                        text="Descubra outra dimensão com o ultrarrealista áudio 3D."
                    />

                    <h2 className="titleXbox padd-16">Xbox</h2>

                </section>

                <section className="headsets__xbox">
                    <div className="headsets__xbox-container">
                        <div className="productCard">
                            <div className="containerImg">
                                <img src={cloudProduct} alt="CloudX" />
                            </div>
                            <div className="containerTitle">
                                <span>CloudX</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <div className="containerImg">
                                <img src={cloudXProduct} alt="CloudX" />
                            </div>
                            <div className="containerTitle">
                                <span>CloudX Chat Headset</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <div className="containerImg">
                                <img src={stingerProduct} alt="CloudX" />
                            </div>
                            <div className="containerTitle">
                                <span>CloudX Stinger</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <div className="containerImg">
                                <img src={coreProduct} alt="CloudX" />
                            </div>
                            <div className="containerTitle">
                                <span>CloudX Stinger Core</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <div className="containerImg">
                                <img src={chargeProduct} alt="CloudX" />
                            </div>
                            <div className="containerTitle">
                                <span>ChargePlay Duo para Xbox</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section__filter">
                    <div className="section__filter-container">
                        <div>
                            <p> 0 Results</p>
                        </div>
                    </div>
                </section>

                <section className="headsets__xbox">
                    <div className="headsets__xbox-heading">
                        <div>
                            <h2>Pc</h2>
                        </div>
                    </div>
                    <div className="headsets__xbox-container">
                        <div className="productCard">
                            <div className="containerImg">
                                <img src={alphaProduct} alt="Cloud Alpha" />
                            </div>
                            <div className="containerTitle">
                                <span>Cloud Alpha</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <div className="containerImg">
                                <img src={flightProduct} alt="Cloud Flight" />
                            </div>
                            <div className="containerTitle">
                                <span>Cloud Flight</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <div className="containerImg">
                                <img src={flightSProduct} alt="Cloud Flight S" />
                            </div>
                            <div className="containerTitle">
                                <span>Cloud Flight Ss</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                        <div className="productCard">
                            <div className="containerImg">
                                <img src={mixProduct} alt="Cloud MIX" />
                            </div>
                            <div className="containerTitle">
                                <span>Cloud MIX</span>
                                <button>Show More +</button>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}