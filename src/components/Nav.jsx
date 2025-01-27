import { navLinks } from '../constants'
import {headerLogo} from '../assets/images'    
import { hamburger } from '../assets/icons'
const Nav = () => {
  return (
    <header className='w-full padding-x absolute z-10 py-4'>
        <nav className='flex items-center justify-between max-container'>
            <div>
                <a href="/"><img src={headerLogo} width={170} height={30} alt="logo" /></a>
            </div>
            <ul className='flex justify-between items-center max-lg:hidden
            gap-16 '>
                {navLinks.map((link, index) => (
                    <li key={index} className='text-lg text-slate-gray
                      leading-normal font-[500] font-montserrat'>
                         <a href={link.href}>{link.label}</a>
                    </li>))}
            </ul>
            <div className='max-lg:block hidden'>
                <img src={hamburger} width={30} height={30}  alt="humburger"/>
            </div>
        </nav>

    </header>

  )
}

export default Nav
