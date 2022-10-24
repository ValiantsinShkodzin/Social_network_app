import React from 'react';
import imgLogoHeader from '../../img/imgLogoHeader.png'
import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.AppHeader}>
      <img src={imgLogoHeader} alt='imgLogoHeader'></img>
    </header>
  )
}
export default Header;
