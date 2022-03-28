import React from 'react'

import { Link } from 'react-router-dom'

import logoLarge from '../../assets/logo.svg'
import logoSmall from '../../assets/logo_small.svg'

import './style/header.scss'

export default function Header(props) {

    function botaoHambuerguer() {
        let button = document.getElementById("hamburguer")
        let navegation = document.getElementById("navegation")

        button.classList.toggle("hamburguer-active")
        navegation.classList.toggle("navegation-active")

        document.body.classList.toggle('active')

    
    }

    return (
        <header className="header__mobile">
            <section className="header__mobile-menu">
                <div className="hamburguer" id="hamburguer" onClick={botaoHambuerguer}>
                    <div></div>
                </div>

                <a href="/" className="">
                    <picture>
                        <source media="(min-width: 47.9em) and (max-width: 72em)" srcset={logoSmall} />
                        <img src={logoLarge} alt="" />
                    </picture>
                </a>
                <nav className='navegation' id="navegation">
                    <ul>
                        <li>
                            <Link to="/headsets">Headsets Gamer</Link>
                        </li>
                        <li>
                            <a href="/">Fones de ouvido</a>
                        </li>
                        <li>
                            <a href="/">Microfones</a>
                        </li>
                        <li>
                            <a href="/">Teclados</a>
                        </li>
                        <li>
                            <a href="/">Memória</a>
                        </li>
                        <li>
                            <a href="/">Mouse</a>
                        </li>
                        <li>
                            <a href="/">Mouse Pads</a>
                        </li>
                        <li>
                            <a href="/">Carregadores</a>
                        </li>
                        <li>
                            <a href="/">Armazenamento</a>
                        </li>
                        <li>
                            <a href="/">Eyewear</a>
                        </li>
                        <li>
                            <a href="/">Software NGENUITY</a>
                        </li>
                        <li>
                            <a href="/">PC</a>
                        </li>
                        <li>
                            <a href="/">Xbox</a>
                        </li>
                        <li>
                            <a href="/">PlayStation</a>
                        </li>
                        <li>
                            <a href="/">Nintendo</a>
                        </li>
                        <li>
                            <a href="/">Dispositivo Móvel</a>
                        </li>
                        <li>
                            <a href="/">Suporte</a>
                        </li>
                        <li>
                            <a href="/">WE'RE ALL GAMERS</a>
                        </li>
                        <li>
                            <a href="/">Português(Brasil)</a>
                        </li>
                        <li>
                            <a href="/">País</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="header__mobile-attention">
                <h3>Atenção</h3>
                <p>
                    Atenta às recomendações dos órgãos de saúde e como mais uma medida para combater a propagação da covid-19,
                    a Kingston Technology do Brasil informa a todos os seus clientes que o serviço de suporte estão trabalhando remotamente.
                    No entanto, todas as mensagens recebidas via e-mail ou outros canais digitais estão sendo respondidas com a atenção e agilidade de sempre.
                    As trocas de produtos das marcas Kingston e HyperX, quando necessárias, poderão sofrer pequenos atrasos, tendo em vista questões fora de nosso controle.
                    Seguimos trabalhando diariamente para dar atendimento e andamento à todas as solicitações. Contamos com a compreensão e colaboração de todos neste momento.
                </p>
            </section>
        </header>
    )
}