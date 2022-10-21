import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import SlugDetails from '../src/components/SlugDetails'

export async function getStaticProps() {
    const DataAPI = await fetch('https://apionigirihardcore.up.railway.app/api/news')
    const data = await DataAPI.json()
    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths() {
    const request = await fetch('https://apionigirihardcore.up.railway.app/api/news')
    const posts = await request.json()
    const paths = posts.map(client => ({
        params: { slug: client.slug.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

const Post = ({data}) => {
    const router = useRouter()
    const { slug } = router.query
    const thumbnail = 'https://c4.wallpaperflare.com/wallpaper/998/145/207/onigiri-hardcore-onigiri-hardcore-wallpaper-preview.jpg'
    
    return (
        <>
            <Header />

            <SlugDetails>
                {
                    data && data.map(post => (
                        post.slug === slug ? (
                            <>
                                <Head>
                                    <title>{post.title}</title>
                                    <meta name="author" content='Anderson "Yagasaki" Marlon' />
                                    <meta name="description" content={post.description} />
                                    <meta property="og:title" content={post.title} />
                                    <meta property="og:description" content={post.description} />
                                    <meta property="og:site_name" content="Anderson Marlon // Software Developer" />
                                    <meta property="og:url" content="https://yagasaki.vercel.app/" />
                                    <meta property="og:image" content={thumbnail} />
                                    <meta property="og:type" content="Website" />
                                    <meta property="og:image:width" content="1200" />
                                    <meta property="og:image:height" content="627" />
                                    <meta name="twitter:card" content="summary" />
                                    <meta name="twitter:site" content={post.title} />
                                    <meta name="twitter:creator" content='Anderson "Yagasaki" Marlon' />
                                    <meta name="twitter:title" content={post.title} />
                                    <meta name="twitter:description" content={post.description} />
                                    <meta name="twitter:image:src" content={thumbnail} />
                                </Head>

                                <img src={post?.image}></img>
                                <section key={post?.id}>
                                    <p className="block__content">{post.createdAtExtended} | {post.author}</p>
                                    <h1 className="title__content">{post?.title}</h1>
                                    <p className="block__content" style={{whiteSpace: "pre-wrap"}}>{post?.body}</p>

                                    {
                                        post.citation != '' ? (
                                            <a href={post?.linkCitation} className="citation" target="_blank">
                                                <p className="block__content">“{post?.citation}”</p>
                                            </a>
                                        ) : null
                                    }

                                    <p className="block__content" style={{whiteSpace: "pre-wrap"}}>{post?.body2}</p>

                                    {
                                        post?.ytid ?
                                            <iframe width="550" height="480" src={'https://www.youtube.com/embed/' + post?.ytid} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null
                                    }
                                </section>
                            </>
                        ) : (
                            null
                        )
                    ))
                }
            </SlugDetails>
            <Footer />
        </>
    )
}
export default Post