import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const ActiveLink = ({ isActive }) => isActive ? classes.active : classes.item;

function Navbar() {
    return (
        <nav className={classes.appNav}>
            <div className={classes.linksNav}>
                <div className={classes.item}>
                    <NavLink to='/' className={ActiveLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' className={ActiveLink}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/users' className={ActiveLink}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news' className={ActiveLink}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music' className={ActiveLink}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings' className={ActiveLink}>Settings</NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;


