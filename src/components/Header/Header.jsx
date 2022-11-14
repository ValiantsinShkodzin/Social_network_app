import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogoHeader from '../../img/imgLogoHeader.png'
import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.AppHeader}>
      <img src={imgLogoHeader} alt='imgLogoHeader'></img>
      <div className={classes.loginBlock}>
        <NavLink to={'/login'}>LOGIN</NavLink>
      </div>
    </header>
  )
}
export default Header;
