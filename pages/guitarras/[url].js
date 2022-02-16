import Image from 'next/image'
import Layout from '../../components/Layout'

import styles from '../../styles/Guitar.module.css'

export default function Product({ guitar }) {
    const { descripcion, imagen, nombre, precio } = guitar[0]

    return (
        <Layout page={`Guitarra ${nombre}`}>
            <div className={styles.guitar_full}>
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

                    <form className={styles.form}>
                        <label>Cantidad:</label>
                        <select>
                            <option value=''>-- Selecciona --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                        </select>
                        <input type='submit' value='Agregar al carrito' />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const urlGuitar = `${process.env.API_URL}/guitarras?url=${url}`
    const response = await fetch(urlGuitar)
    const result = await response.json()

    return {
        props: {
            guitar: result,
        },
    }
}
