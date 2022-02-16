import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Guitar.module.css'

export default function Guitar({ guitar }) {
    const { descripcion, imagen, nombre, precio, url } = guitar
    return (
        <div className={styles.guitar}>
            <Image
                layout='responsive'
                width={180}
                height={350}
                src={imagen.url}
                alt={nombre}
            />

            <div className={styles.content}>
                <h3>{nombre}</h3>
                <p className={styles.description}>{descripcion}</p>
                <p className={styles.price}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.link}>Ver Producto</a>
                </Link>
            </div>
        </div>
    )
}
