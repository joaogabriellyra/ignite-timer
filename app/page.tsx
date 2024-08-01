import Header from './components/header'
import Timer from './components/timer'
import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Timer />
      </main>
    </>
  )
}
