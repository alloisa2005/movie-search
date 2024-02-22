import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/images/logo.webp'


const LogoMovie = () => {
  return (
    <Link href={'/'} className='flex items-center gap-x-3'>
      <Image src={Logo} alt='Logo' width={55} height={55} priority />
      <p className='text-2xl font-bold'>MOVIE DB</p>
    </Link>
  )
}

export default LogoMovie