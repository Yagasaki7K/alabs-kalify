import Link from 'next/link'
import HeaderDetails from './HeaderDetails'

export default function Header() {
    return (
        <HeaderDetails>
            <div className="header">
                <Link>
                    <a href="/" className="logotipo">
                        <img src="/logotipo-white.png" className="logotipo" alt="logo" />
                    </a>
                </Link>
                <Link>
                    <a href="/">
                        <img src="/anuncio.png" className="advice" alt="Anuncio" />
                    </a>
                </Link>
            </div>

            <div className="navigation">
                <ul id="ul-menu">
                    <li className="burguer">
                        <Link><a href="#"><i className="uil uil-bars"></i></a></Link>
                    </li>
                    <span id="item-menu">
                        <li>
                            <Link><a href="/noticias">Notícias</a></Link>
                        </li>
                        <li>
                            <Link><a href="/#animes">Animes {`&`} HQ{`'`}s</a></Link>
                        </li>
                        <li>
                            <Link><a href="/#animes">Jogos</a></Link>
                        </li>
                        <li>
                            <Link><a href="/#news">Tecnologia</a></Link>
                        </li>
                        <li>
                            <Link>
                                <a href="https://onigiri-hardcore.blogspot.com/" target="_blank" rel="noreferrer">
                                    OH: Arquivos
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a href="https://kalify.vercel.app" target="_blank" rel="noreferrer">
                                Kalify Inc
                            </a>
                        </li>
                    </span>
                </ul>
            </div>
        </HeaderDetails >
    )
}
