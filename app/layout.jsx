import Nav from '../components/Nav';
import Post from '../components/Post';
import styles from '../styles/main.module.scss';
export const metadata = {
  title: 'InstaLife',
  description: 'Photosharing app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.main}>
        <Nav />
        {children}
        <Post />
        
      </body>
    </html>

  )
}
