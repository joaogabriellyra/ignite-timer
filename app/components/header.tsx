import Image from 'next/image'
import { Timer, Scroll } from '@phosphor-icons/react/dist/ssr'
import logo from '@/public/logo.svg'

export default function Header() {
  return (
    <header>
      <Image
        src={logo}
        width={logo.width}
        height={logo.height}
        alt="rocketseat logo"
      />
      <div>
        <Timer width={27} height={32} />
        <Scroll width={35} height={32} />
      </div>
    </header>
  )
}
