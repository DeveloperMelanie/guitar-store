import Guitar from './Guitar'

import styles from '../styles/GuitarList.module.css'

export default function GuitarList({ guitars }) {
    return (
        <div className={styles.list}>
            {guitars.map(guitar => (
                <Guitar key={guitar.id} guitar={guitar} />
            ))}
        </div>
    )
}
