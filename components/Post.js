import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '../helpers'

import styles from '../styles/Post.module.css'

export default function Post({ blog }) {
    const { titulo, resumen, imagen, published_at, url } = blog

    return (
        <article>
            <Image
                priority
                layout='responsive'
                width={800}
                height={600}
                src={imagen.url}
                alt={titulo}
            />

            <div className={styles.content}>
                <h3>{titulo}</h3>
                <p className={styles.date}>{formatDate(published_at)}</p>
                <p className={styles.summary}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.link}>Leer entrada</a>
                </Link>
            </div>
        </article>
    )
}
