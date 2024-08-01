import Timer from '@/app/components/timer'
import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <Timer />
      </main>
    </>
  )
}
