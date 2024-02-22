import LogoMovie from "./LogoMovie"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <section className='bg-foreground text-white'>

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