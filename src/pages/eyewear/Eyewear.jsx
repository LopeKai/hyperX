
import iconVideo from '../../assets/eweyear/icon/video.PNG'
import iconDown from '../../assets/eweyear/icon/down.svg'
import iconProtection from '../../assets/eweyear/icon/icon1.PNG'
import iconLenses from '../../assets/eweyear/icon/icon2.PNG'
import iconDurability from '../../assets/eweyear/icon/icon3.PNG'
import iconDesign from '../../assets/eweyear/icon/icon4.PNG'
import iconOption from '../../assets/eweyear/icon/icon5.PNG'

import imgEyewearSpectre from '../../assets/eweyear/eyewear-spectre.jpg'

import imgProductProtection from '../../assets/eweyear/characteristics/protection.webp'
import imgProductTransparent from '../../assets/eweyear/characteristics/transparent.webp'
import imgProductComfort from '../../assets/eweyear/characteristics/comfort.jpg'
import imgProductDesign from '../../assets/eweyear/characteristics/design.jpg'

import './style/eyewear.scss'

export default function Eyewear() {
    return (
        <section className="eyewear">
            <div className="eyewear__container">

                <section className="eyewear__container-hyperxSpectre">
                    <a href="">
                        <div className="containerImg">
                            <img src={imgEyewearSpectre} alt="" />
                        </div>
                        <div className="containerTitle">
                            <div className="containerTitle-title">
                                <h2>
                                    Elegante proteção contra luz azul
                                    para o trabalho, para casa e para jogos.
                                </h2>
                            </div>
                            <div className="containerTitle-assist">
                                <img src={iconVideo} alt="" />
                                <p>Assita o Vídeo</p>
                            </div>
                        </div>
                    </a>
                </section>

                <section className="spectreEyewear">
                    <div className="spectreEyewear__container">
                        <div className="spectreEyewear__container-title">
                            <div>
                                <span>Spectre Eyewear</span>
                                <img src={iconDown} alt="" />
                            </div>
                            <a href="" className='btn-buy'>Comprar</a>
                        </div>
                    </div>
                </section>

                <section className="hyperxSpectre">
                    <div className="hyperxSpectre__container">
                        <div className="hyperxSpectre__container-title">
                            <h2>Óculos HyperX Spectre</h2>
                            <p>
                                A linha de óculos gamer HyperX Spectre apresenta uma série de óculos confortáveis e com ampla proteção.
                                As lentes filtram a luz azul, reduzindo os efeitos da tensão ocular digital, incluindo dor de cabeça,
                                visão embaçada e fadiga ocular. As lentes premium transparentes são projetadas para reduzir a distorção de cores para que você tenha a experiência de jogos desejada.
                                Esta estilosa linha de óculos foi criada para ser usada confortavelmente com ou sem um headset. Proteja seus olhos enquanto usa dispositivos digitais em uma grande variedade de cenários.
                                Uma caixa1 rígida para transporte e uma bolsa de microfibra estão incluídos para um transporte protegido e seguro.
                            </p>
                        </div>
                        <div className="hyperxSpectre__container-decription">
                            <ul>
                                <li>
                                    <div>
                                        <img src={iconProtection} alt="" />
                                    </div>
                                    <span>Proteção confiável contra luz azul e UV</span>
                                </li>
                                <li>
                                    <div>
                                        <img src={iconLenses} alt="" />
                                    </div>
                                    <span>Lentes totalmente transparentes</span>
                                </li>
                                <li>
                                    <div>
                                        <img src={iconDurability} alt="" />
                                    </div>
                                    <span>Conforto e durabilidade exclusivos HyperX</span>
                                </li>
                                <li>
                                    <div>
                                        <img src={iconDesign} alt="" />
                                    </div>
                                    <span>Design versátil e estiloso com uma caixa1 rígida para transpor</span>
                                </li>
                                <li>
                                    <div>
                                        <img src={iconOption} alt="" />
                                    </div>
                                    <a href="https://www.lensabl.com/hyperx-eyewear" target="_blank">Opções em óculos de grau disponíveis</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section className="characteristics">
                    <div className="characteristics__container">
                        <section className="container__title">
                            <h2>Características</h2>
                        </section>
                        <section className="container__products-characteristics">

                            <div className="characteristics__card">
                                <div className="characteristics__card-containerImg">
                                    <picture>
                                        <img src={imgProductProtection} alt="Lentes recebendo proteção contra luz azul e UV" />
                                    </picture>
                                </div>
                                <div className="characteristics__card-containerTitle">
                                    <h4>Proteção confiável contra luz azul e UV</h4>
                                    <p>As lentes filtram a luz azul, reduzindo os efeitos da tensão ocular digital, incluindo dor de cabeça, visão embaçada e fadiga ocular</p>
                                </div>
                            </div>

                            <div className="characteristics__card">
                                <div className="characteristics__card-containerImg">
                                    <picture>
                                        <img src={imgProductTransparent} alt="" />
                                    </picture>
                                </div>
                                <div className="characteristics__card-containerTitle">
                                    <h4>Lentes totalmente transparentes</h4>
                                    <p>Lentes transparentes, antirreflexo oferecem cores verdadeiras e vibrantes para a experiência desejada nos jogos.</p>
                                </div>
                            </div>

                            <div className="characteristics__card">
                                <div className="characteristics__card-containerImg">
                                    <picture>
                                        <img src={imgProductComfort} alt="Gamer utilizando seu óculos exclusivo HyperX" />
                                    </picture>
                                </div>
                                <div className="characteristics__card-containerTitle">
                                    <h4>Conforto e Durabilidade exclusivos HyperX</h4>
                                    <p>Leve e projetado para ser confortável e durável o suficiente para usar durante todo o dia com ou sem um headset.</p>
                                </div>
                            </div>

                            <div className="characteristics__card">
                                <div className="characteristics__card-containerImg">
                                    <picture>
                                        <img src={imgProductDesign} alt="" />
                                    </picture>
                                </div>
                                <div className="characteristics__card-containerTitle">
                                    <h4>Design versátil e estiloso com uma caixa rígida para transporte</h4>
                                    <p>Proteja seus olhos enquanto usa dispositivos digitais em uma grande variedade de cenários. Uma caixa1 rígida para transporte e uma bolsa de microfibra estão incluídos para um transporte protegido e seguro.</p>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                </section>
            </div>
        </section>
    )
}