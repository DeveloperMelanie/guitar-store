import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Header.module.css'

export default function Header({ guitar }) {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.bar}>
                    <Link href='/'>
                        <a>
                            <Image
                                width={400}
                                height={100}
                                src='/img/logo.svg'
                                alt='GuitarLA logo'
                            />
                        </a>
                    </Link>

                    <nav className={styles.nav}>
                        <Link href='/'>
                            <a>Inicio</a>
                        </Link>
                        <Link href='/nosotros'>
                            <a>Nosotros</a>
                        </Link>
                        <Link href='/blog'>
                            <a>Blog</a>
                        </Link>
                        <Link href='/tienda'>
                            <a>Tienda</a>
                        </Link>
                    </nav>
                </div>

                {guitar && (
                    <div className={styles.model}>
                        <h2>Modelo {guitar.nombre}</h2>
                        <p>{guitar.descripcion}</p>
                        <p className={styles.price}>${guitar.precio}</p>
                        <Link href={`/guitarras/${guitar.url}`}>
                            <a className={styles.link}>Ver Producto</a>
                        </Link>
                    </div>
                )}
            </div>

            {guitar && (
                <div className={styles.guitar}>
                    <Image
                        layout='fixed'
                        width={500}
                        height={1200}
                        src='/img/header_guitar.png'
                        alt='Guitarra'
                    />
                </div>
            )}
        </header>
    )
}
