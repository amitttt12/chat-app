import React from "react";
import './RightSidebar.css'

import assets from '../../assets/assets'
import { logout } from "../../config/firebase";
const RigthSidebar = () => {
    return (
        <div className="rigthSidebar">
            <div className="rigthSidebarProfile">
                <img src={assets.profile_img} alt="profile-image" />
                <h3>Walter White<img src={assets.green_dot} alt="green-dot" className="dot" /></h3>
                <p>Hey,I am Chemistry Professor and Drug Lord.</p>
            </div>
            <hr />

            <div className="rigthSidebarMedia">
                <p>Media</p>
                <div>
                    <img src={assets.pic1} alt="media-pic" />
                    <img src={assets.pic2} alt="media-pic" />
                    <img src={assets.pic3} alt="media-pic" />
                    <img src={assets.pic4} alt="media-pic" />
                    <img src={assets.pic1} alt="media-pic" />
                    <img src={assets.pic2} alt="media-pic" />
                </div>
            </div>

            <button onClick={() => logout()}>Logout</button>


        </div>);
};

export default RigthSidebar;
