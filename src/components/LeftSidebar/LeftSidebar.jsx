import React from "react";
import './LeftSidebar.css'
import assets from '../../assets/assets'
const LeftSidebar = () => {
    return <div className="leftSidebar">
        <div className="leftSidebarTop">
            <div className="leftSidebarNav">
                <img src={assets.logo} alt="navbar-logo" className="logo" />
                <div className="menu">
                    <img src={assets.menu_icon} alt="menu-icon" />
                    <div className="subMenu">
                        <p>Edit Profile</p>
                        <hr />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
            <div className="leftSidebarSearch">

                <img src={assets.search_icon} alt="search-icon" />
                <input type="text" placeholder="Search here..." />
            </div>
        </div>
        <div className="leftSidebarList">


            {
                Array(12).fill("").map((item, index) => (
                    <div key={index} className="friends">
                        <img src={assets.profile_img} alt="profile-image" />
                        <div>
                            <p>Walter White</p>
                            <span>Say my Name!</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>;
};

export default LeftSidebar;
