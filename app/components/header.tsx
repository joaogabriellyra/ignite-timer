import Image from 'next/image'
import { Timer, Scroll } from '@phosphor-icons/react/dist/ssr'
import logo from '@/public/logo.svg'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        width={logo.width}
        height={logo.height}
        alt="rocketseat logo"
        className={styles.rocketseatLogo}
      />
      <div className={styles.divHeaderIcons}>
        <Timer width={27} height={32} className={styles.timerSvg} />
        <Scroll width={35} height={32} className={styles.historySvg} />
      </div>
    </header>
  )
}
