import Link from 'next/link'

import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
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

                <p className={styles.copyright}>
                    &copy; Todos los derechos reservados
                </p>
            </div>
        </footer>
    )
}
