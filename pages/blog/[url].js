import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/Layout'
import { formatDate } from '../../helpers'

import styles from '../../styles/Post.module.css'

export default function BlogPost({ blog }) {
    const { contenido, imagen, published_at, titulo } = blog[0]

    return (
        <Layout page={titulo}>
            <main className='container'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.post}>
                    <Image
                        priority
                        layout='responsive'
                        width={800}
                        height={600}
                        src={imagen.url}
                        alt={titulo}
                    />

                    <div className={styles.content}>
                        <p className={styles.date}>
                            {formatDate(published_at)}
                        </p>
                        <ReactMarkdown>{contenido}</ReactMarkdown>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url)
    const result = await response.json()

    const paths = result.map(blog => ({
        params: {
            url: blog.url,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { url } }) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const response = await fetch(urlBlog)
    const result = await response.json()

    return {
        props: {
            blog: result,
        },
    }
}
