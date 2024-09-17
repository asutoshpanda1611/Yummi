import './Navbar.css'
import React, { useContext, useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to={'/'}><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu("home")} className={menu == 'home' ? 'active' : ''}>HOME</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu == 'menu' ? 'active' : ''} >MENU</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu == 'mobile-app' ? 'active' : ''}>MOBILE-APP</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu == 'contact-us' ? 'active' : ''}>CONTACT US</a>
      </ul>

      <div className='navbar-right'>
      <IoIosSearch size={30}/>

        <div className="navbar-search-icon">
            <Link to='/cart'><IoBagHandleSharp size={30}/></Link>
            <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar