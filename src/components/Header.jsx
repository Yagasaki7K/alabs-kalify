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
                        <Link href="#"><a><i className="uil uil-bars"></i></a></Link>
                    </li>
                    <span id="item-menu">
                        <li>
                            <Link href="/noticias"><a>Notícias</a></Link>
                        </li>
                        <li>
                            <Link href="/#animes"><a>Animes {`&`} HQ{`'`}s</a></Link>
                        </li>
                        <li>
                            <Link href="/#animes"><a>Jogos</a></Link>
                        </li>
                        <li>
                            <Link href="/#news"><a>Tecnologia</a></Link>
                        </li>
                        <li>
                            <Link href="https://onigiri-hardcore.blogspot.com/" target="_blank" rel="noreferrer">
                                <a>
                                    OH: Arquivos
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://kalify.vercel.app" target="_blank" rel="noreferrer">
                                <a>
                                    Kalify Inc
                                </a>
                            </Link>
                        </li>
                    </span>
                </ul>
            </div>
        </HeaderDetails >
    )
}
