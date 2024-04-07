import React, {useState} from 'react'
import { IoMenuSharp } from "react-icons/io5";



const Navbar = () => {
  const [active, setActive] = useState('navbar-list');
    const [toggleIcon, setToggleIcon] = useState('nav-toggler')

    const navToggle = () => {
        active === 'nav-menu' ? setActive('nav-menu nav-active') : setActive('nav-menu');
        toggleIcon === 'nav-toggler' ? setToggleIcon('nav-toggler toggle') : setToggleIcon('nav-toggler')
  

  
}



    return(
        <div>
              {/* HEADER*/}
<header className='header section' data-header>
<div className='container'>
<a href="#" className="logo">
      <img src="images/ivent png.png" width="129" height="40" alt="Blogy logo" />
    </a>
   
    <nav >
        <ul class={active}> //navbar-list
        <li class="navbar-item">
            <a href="#" class="navbar-link hover:underline" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link hover:underline" data-nav-link>Recent Post</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link hover:underline" data-nav-link>Dashboard</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link hover:underline" data-nav-link>Podcasts</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link hover:underline" data-nav-link>Event Topics</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link hover:underline" data-nav-link>Membership</a>
          </li>

        </ul>

        
      </nav>

      <div class="wrapper">

<button class="search-btn" aria-label="search" data-search-toggler>
  <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
  


  <span class="span">Search</span>
</button>
<div onClick={navToggle} className={toggleIcon}>
<button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler >
  <span class="span one"></span>
  <span class="span two"></span>
  <span class="span three"></span>
</button>

</div>

<a href="#" class="btn">Join</a>

</div>
</div>

</header>

{/*search bar*/}
<div className="search-bar" data-search-bar>
      <div className="input-wrapper">
        <input type="search" name="search" placeholder="Search" className="input-field" />

        <button className="search-close-btn" aria-label="close search bar" data-search-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>

      <p className="search-bar-text">Search keywords</p>
    </div>

    <div className="overlay" data-overlay data-search-toggler></div>


        </div>
    )
}

export default Navbar