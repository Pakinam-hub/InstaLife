import Link from 'next/link';
import styles from '../styles/main.module.scss';


export default function Nav() {
  return (

    <nav className={styles.navbar}>

      <ul className={styles.list}>

        <li className={styles.navlinks}>
          <Link href="/">⌂<span className={styles.label}>Home</span></Link>
        </li>
        <li className={styles.createPost}>
          <Link href="/">+</Link>
        </li>
        <li className={styles.navlinks}>
          <Link href="/FavoritePosts">♡<span className={styles.label}>Favorites</span></Link>
        </li>

      </ul>
    </nav>

  )
}
