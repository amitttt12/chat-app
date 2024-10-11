import React from "react";
import './ChatBox.css'
import assets from '../../assets/assets'
const ChatBox = () => {
    return (<div className="chatBox">
        <div className="chatUser">
            <img src={assets.profile_img} alt="profile-image" />
            <p>Walter White <img src={assets.green_dot} className="dot" alt="online-dot-icon" /></p>
            <img src={assets.help_icon} alt="help-icon" className="help" />
        </div>

        <div className="chatMessage">
            <div className="senderMessage">
                <p className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus!</p>
                <div>
                    <img src={assets.profile_img} alt="profile-image" />
                    <p>11:11 PM</p>

                </div>

            </div>

            <div className="senderMessage">
                {/* <p className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus!</p> */}
                <img src={assets.pic1} alt="message-img" className="messageImage" />
                <div>
                    <img src={assets.profile_img} alt="profile-image" />
                    <p>11:11 PM</p>

                </div>

            </div>
            <div className="receiverMessage">
                <p className="message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, necessitatibus!</p>
                <div>
                    <img src={assets.profile_img} alt="profile-image" />
                    <p>11:11 PM</p>

                </div>

            </div>
        </div>



        <div className="chatInput">
            <input type="text" placeholder="Send a message" />
            <input type="file" id="image" accept="image/png,image/jpeg" hidden />
            <label htmlFor="image">
                <img src={assets.gallery_icon} alt="gallery-icon" />
            </label>
            <img src={assets.send_button} alt="send-button" />
        </div>



    </div>
    )
};

export default ChatBox;
