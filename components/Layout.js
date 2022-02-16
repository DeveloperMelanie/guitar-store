import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, page, guitar }) {
    return (
        <div>
            <Head>
                <title>{page ? `GuitarLA - ${page}` : 'GuitarLA'}</title>
                <meta
                    name='description'
                    content='Encuentra las mejores guitarras del mercado'
                />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap'
                    rel='stylesheet'
                />
            </Head>

            <Header guitar={guitar} />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitar: null,
}
