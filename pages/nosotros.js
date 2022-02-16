import Image from 'next/image'

import Layout from '../components/Layout'

import styles from '../styles/Us.module.css'

export default function Us() {
    return (
        <Layout page='Nosotros'>
            <main className='container'>
                <h2 className='heading'>Nosotros</h2>

                <div className={styles.content}>
                    <Image
                        layout='responsive'
                        width={600}
                        height={450}
                        src='/img/us.jpg'
                        alt='Sobre nosotros'
                    />
                    <div>
                        <p>
                            Etiam lacinia bibendum nunc nec commodo. Ut lacinia
                            dolor quis libero faucibus efficitur. Aenean vitae
                            massa eget libero dapibus imperdiet tristique quis
                            enim. Aenean tempor nec diam eget efficitur. Nulla
                            facilisi. Integer iaculis lorem vitae varius
                            ultrices. Sed quis pretium arcu. Nulla finibus velit
                            feugiat nulla venenatis pulvinar. Sed elit augue,
                            condimentum quis vehicula vitae, blandit ut est. Sed
                            fermentum augue enim, ac fringilla enim tempor quis.
                            Cras est quam, faucibus non arcu vel, varius lacinia
                            orci. Donec dolor risus, rhoncus vitae eleifend
                            consequat, pharetra non tortor. Pellentesque
                            ullamcorper diam non imperdiet porta.
                        </p>
                        <p>
                            Etiam lacinia bibendum nunc nec commodo. Ut lacinia
                            dolor quis libero faucibus efficitur. Aenean vitae
                            massa eget libero dapibus imperdiet tristique quis
                            enim. Aenean tempor nec diam eget efficitur. Nulla
                            facilisi. Integer iaculis lorem vitae varius
                            ultrices. Sed quis pretium arcu. Nulla finibus velit
                            feugiat nulla venenatis pulvinar. Sed elit augue,
                            condimentum quis vehicula vitae, blandit ut est. Sed
                            fermentum augue enim, ac fringilla enim tempor quis.
                            Cras est quam, faucibus non arcu vel, varius lacinia
                            orci. Donec dolor risus, rhoncus vitae eleifend
                            consequat, pharetra non tortor. Pellentesque
                            ullamcorper diam non imperdiet porta.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
