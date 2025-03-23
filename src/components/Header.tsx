import Link from 'next/link'
import Image from 'next/image'
import { Button} from '@/components/ui/button'
import { shadow } from '@/styles/utils'
import DarkModeToggle from '@/components/DarkModeToggle'
// import LogOutButton from '@/components/LogOutButton'

const Header = () => {
    const user = null;

  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8' style={{boxShadow: shadow}}>
        <Link className="flex items-end gap-2" href="/">
        <Image src="/goatius.png" alt="Logo" width={60} height={60} className='rounded-full' priority/>
        </Link>
        <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'>
            Personal <span>Notes</span>
        </h1>
        <div className="flex gap-4">
{user ? ("Logout"): 
(<>
<Button asChild variant="outline">
<Link href="/login">Login</Link>
</Button>
<Button asChild >
<Link href="/sign-up" className='hidden sm:block'>Sign Up</Link>
</Button>
</>)}
<DarkModeToggle/>
        </div>
    </header>
  )
}

export default Header