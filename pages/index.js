import Course from '../components/Course'
import Layout from '../components/Layout'
import GuitarList from '../components/GuitarList'
import BlogList from '../components/BlogList'

export default function Home({ guitars, course, blogs, featuredGuitar }) {
    return (
        <Layout page='Inicio' guitar={featuredGuitar[0]}>
            <main className='container'>
                <h1 className='heading'>Nuestra Colección</h1>
                <GuitarList guitars={guitars} />
            </main>

            <Course course={course} />
            <section className='container'>
                <BlogList blogs={blogs} />
            </section>
        </Layout>
    )
}

export async function getServerSideProps() {
    const urlGuitars = `${process.env.API_URL}/guitarras`
    const urlCourses = `${process.env.API_URL}/cursos`
    const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

    const [resGuitars, resCourses, resBlog] = await Promise.all([
        fetch(urlGuitars),
        fetch(urlCourses),
        fetch(urlBlog),
    ])

    const [guitars, course, blogs] = await Promise.all([
        resGuitars.json(),
        resCourses.json(),
        resBlog.json(),
    ])

    const featuredGuitar = guitars.filter(guitar => guitar.destacado)

    return {
        props: {
            guitars,
            course,
            blogs,
            featuredGuitar,
        },
    }
}
