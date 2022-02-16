import styles from '../styles/Course.module.css'

export default function Course({ course }) {
    const { titulo, contenido, imagen } = course

    return (
        <section>
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.text}>{contenido}</p>

                    <a href='#' className={styles.link}>
                        Más Información
                    </a>
                </div>
            </div>

            <style jsx>{`
                section {
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(
                            to right,
                            rgb(0 0 0 / 0.65),
                            rgb(0 0 0 / 0.7)
                        ),
                        url(${imagen.url});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            `}</style>
        </section>
    )
}
