import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/NotFound.module.css'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>Página no encontrada</title>
            </Head>

            <div className={styles.not_found}>
                <h1 className='heading'>Página no encontrada</h1>
                <Link href='/'>
                    <a>Volver al Inicio</a>
                </Link>
            </div>
        </>
    )
}
