import React from 'react'

import Button from '../../components/button/Button'

import cloudx_lg from '../../assets/home/cloudX/cloudx-lg.webp'
import cloud_sm from '../../assets/home/cloudX/cloudx-sm.webp'
import imgMouse from '../../assets/home/peripherals/mouse.jpg'
import imgHead from '../../assets/home/peripherals/head.jpg'
import imgTeclado from '../../assets/home/peripherals/teclado.webp'
import imgTecladoAlloy from '../../assets/home/peripherals/teclado-alloy.webp'
import imgPoki from '../../assets/home/heroes/poki.jpg'
import imgJuju from '../../assets/home/heroes/juju.jpg'
import imgGordon from '../../assets/home/heroes/gordon.jpg'

import './style/home.scss'

export default function Home() {
    return (
        <div>
            <section className="Home">
                <div className="Home-containerImg">
                    <picture className="img-wrapper">
                        <source media="(min-width: 64em)" srcset={cloudx_lg} />
                        <img src={cloud_sm} alt="" />
                    </picture>
                </div>
                <div className="Home-containerTitle padd-16">
                    <h3>HyperX CloudX Stinger Core Headset Wireless Gamer</h3>
                    <p>Completa liberdade sem fio para Xbox</p>
                    <Button> Saiba mais </Button>
                </div>
            </section>

            <section className="peripherals padd-16 padd-topBottom-16">
                <section className="peripherals-container">
                    <div className="cards">
                        <a href="#" className="card">
                            <picture className="card-containerImg img-wrapper">
                                <img src={imgMouse} alt="" />
                            </picture>
                            <div className="card-containerTitle">
                                <h4>Mouse Gamer HyperX Pulsefire Haste</h4>
                                <p>Mire mais rápido, jogue melhor.</p>
                            </div>
                        </a>

                        <a href="#" className="card">
                            <picture className="card-containerImg img-wrapper">
                                <img src={imgHead} alt="" />
                            </picture>
                            <div className="card-containerTitle">
                                <h4>HyperX Cloud Alpha </h4>
                                <p>Mais câmaras para menos distorção.</p>
                            </div>
                        </a>

                        <a href="#" className="card">
                            <picture className="card-containerImg img-wrapper">
                                <img src={imgTeclado} alt="" />
                            </picture>
                            <div className="card-containerTitle">
                                <h4>Alloy Origins</h4>
                                <p>Teclado compacto apresentadno chaves de tacla HyperX <br /> exclusivas.</p>
                            </div>
                        </a>

                        <a href="#" className="card">
                            <picture className="card-containerImg img-wrapper">
                                <img src={imgTecladoAlloy} alt="" />
                            </picture>
                            <div className="card-containerTitle">
                                <h4>Alloy FPS RGB</h4>
                                <p>Impressionate iluminação RGB com efeitos dinâmicos em um <br /> modelo compacto.</p>
                            </div>
                        </a>
                    </div>
                </section>
            </section>

            <section className="heroes padd-16 padd-topBottom-16">
                <div className="heroes-title">
                    <h2>Saiba mais sobre os heróis HyperX</h2>
                </div>
                <div className="heroes_cards">
                    <div className="heroes_cards-card">
                        <a href="#">
                            <picture className='heroes_cards-card-containerImg img-wrappe'>
                                <img src={imgPoki} alt="" />
                            </picture>
                            <div className="heroes_cards-card_name">
                                <h4>Pokimane</h4>
                            </div>
                        </a>
                    </div>

                    <div className="heroes_cards-card">
                        <a href="#">
                            <picture className='img-wrappe'>
                                <img src={imgJuju} alt="" />
                            </picture>
                            <div className="heroes_cards-card_name">
                                <h4>Juju</h4>
                            </div>
                        </a>
                    </div>

                    <div className="heroes_cards-card">
                        <a href="#">
                            <picture className='img-wrappe'>
                                <img src={imgGordon} alt="" />
                            </picture>
                            <div className="heroes_cards-card_name">
                                <h4>Gordon Haywards</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}