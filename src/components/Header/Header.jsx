import React from 'react'
import './Header.css'
import { useState } from 'react';

const Header = () => {

  const [menu,setMenu] = useState("home");
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu == 'menu' ? 'active' : ''} ><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header