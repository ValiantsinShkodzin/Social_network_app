import React from 'react';
import imgProfileTopBanner from '../../../img/imgProfileTopBanner.jpg'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
   
    return (
        
        <div>
            <div>
                <img className={classes.TopBanner} src={imgProfileTopBanner} alt='imgProfileTopBanner'></img>
            </div>
            <div className={classes.infoBlock}>
                <div className={classes.avaBlock}>
                    <img className={classes.avaProfile} src={props.profile.photos.large} alt='avaProfile'></img></div>
                <div className={classes.descriptionBlock}>
                    <div className={classes.nameBlock}>
                        <h2>{props.profile.fullName}</h2>
                        <hr />
                        <span>Status: My lifes...My rules...</span>
                    </div>
                    <div className={classes.descBlock}>
                        <span>Date of Birth: 14.08.1994</span><br />
                        <span>My address: Belarus, Minsk</span><br />
                        <span>Tel: +375336252525</span><br />
                        <span>Contacts: {props.profile.contacts.github}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


