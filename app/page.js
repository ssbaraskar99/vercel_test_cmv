import Image from 'next/image'
import styles from './page.module.css'
import List from './component/List'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>List of Data : </h1>
      <List/>
    </main>
  )
}
