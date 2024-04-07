import '../navbar.css';
import React, {useState}from 'react';
import '../App.css';

export default function Navbar() {
    const [active, setActive] = useState('nav-menu');
    const [toggleIcon, setToggleIcon] = useState('nav-toggler')

    const navToggle = () => {
        active === 'nav-menu' ? setActive('nav-menu nav-active') : setActive('nav-menu');
        toggleIcon === 'nav-toggler' ? setToggleIcon('nav-toggler toggle') : setToggleIcon('nav-toggler')
    }
  return (
    <div>
      <nav className='nav mt-16'>
      <a href="#" className="logo mt-10">
      <img src="images/ivent png.png" width="129" height="40" alt="Blogy logo" />
    </a>
        <ul className={active}>
            <li className='nav-item'>
                <a href="#" className='nav-link hover:underline'>Home</a> 
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link hover:underline'>Recent Post</a> 
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link hover:underline'>Dashboard</a> 
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link hover:underline'>Podcasts</a> 
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link hover:underline'>Event Topics</a> 
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link hover:underline'>Membership</a> 
            </li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>

        <a href="#" class="dele">Join</a>


  
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

      </nav>
    </div>
  )
}
