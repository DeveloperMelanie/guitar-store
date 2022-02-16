import Post from '../components/Post'

import styles from '../styles/Blog.module.css'

export default function BlogList({ blogs }) {
    return (
        <>
            <h2 className='heading'>Blog</h2>

            <div className={styles.blog}>
                {blogs.map(blog => (
                    <Post key={blog.id} blog={blog} />
                ))}
            </div>
        </>
    )
}
