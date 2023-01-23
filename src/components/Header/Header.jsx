import React from 'react';
import imgLogoHeader from '../../img/imgLogoHeader.png';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={classes.AppHeader}>
      <img src={imgLogoHeader} alt='imgLogoHeader'></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>LOGIN</NavLink>}
      </div>
    </header>
  )
}
export default Header;
