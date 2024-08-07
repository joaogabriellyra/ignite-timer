import Image from 'next/image'
import { Timer, Scroll } from '@phosphor-icons/react/dist/ssr'
import logo from '@/public/logo.svg'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        width={40}
        height={40}
        alt="rocketseat logo"
        className={styles.rocketseatLogo}
      />
      <nav className={styles.navHeaderIcons}>
        <Link href="/home">
          <Timer size={24} />
        </Link>
        <Link href="/history">
          <Scroll size={24} />
        </Link>
      </nav>
    </header>
  )
}
