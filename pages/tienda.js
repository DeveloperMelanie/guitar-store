import Layout from '../components/Layout'
import GuitarList from '../components/GuitarList'

export default function Shop({ guitars }) {
    return (
        <Layout page='Tienda Virtual'>
            <main className='container'>
                <h1 className='heading'>Nuestra Colección</h1>

                <GuitarList guitars={guitars} />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras`
    const response = await fetch(url)
    const result = await response.json()

    return {
        props: {
            guitars: result,
        },
    }
}
