import Layout from '../components/Layout'
import BlogList from '../components/BlogList'

export default function Blog({ blogs }) {
    return (
        <Layout page='Blog'>
            <main className='container'>
                <BlogList blogs={blogs} />
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const response = await fetch(url)
    const result = await response.json()

    return {
        props: {
            blogs: result,
        },
    }
}
