import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

const SearchBar = async () => {  

  return (
    <div className='flex items-center gap-x-3'>
      <Input type="text" placeholder="Search movie..." className='text-black md:w-[320px]' />
      <Button>
        <Search className="h-4 w-4" /> 
      </Button>
    </div>
  )
}

export default SearchBar