'use client'

import { usePathname } from "next/navigation"
import LogoMovie from "./LogoMovie"
import SearchBar from "./SearchBar"

const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <section className={`${pathname.includes('/movies') ? 'bg-transparent': 'bg-foreground'} text-white`}>

      <div className='w-full max-w-[1450px] px-4 mx-auto h-20 flex items-center justify-between'>
        {/* Logo */}
        <LogoMovie />

        {/* Search Bar */}
        <SearchBar />
      </div>

    </section>
  )
}

export default Navbar