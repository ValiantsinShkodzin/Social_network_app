import React from 'react';
import imgProfileTopBanner from '../../../img/imgProfileTopBanner.jpg'
import avaProfile from '../../../img/avaProfile.jpg'
import classes from './ProfileInfo.module.css'


function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img className={classes.TopBanner} src={imgProfileTopBanner} alt='imgProfileTopBanner'></img>
            </div>
            <div className={classes.infoBlock}>
                <div className={classes.avaBlock}>
                    <img className={classes.avaProfile} src={props.profile.photo.large} alt='avaProfile'></img></div>
                <div className={classes.descriptionBlock}>
                    <div  className={classes.nameBlock}>
                        <h2>Ralf</h2>
                        <hr />
                        <span>Status: My lifes...My rules...</span>
                    </div>
                    <div className={classes.descBlock}>
                        <span>Date of Birth: 14.08.1994</span><br />
                        <span>My address: Belarus, Minsk</span><br />
                        <span>Tel: +375336252525</span><br />
                        <span>My hobby: powerlifting, kayaking, tasty food</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


