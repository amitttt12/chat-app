import React from "react";
import './Chat.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import ChatBox from "../../components/ChatBox/ChatBox";
import RightSidebar from '../../components/RigthSidebar/RigthSidebar'
const Chat = () => {
    return <div className="chat">
        <div className="chatContainer">
            <LeftSidebar />
            <ChatBox />
            <RightSidebar />
        </div>
    </div>;
};

export default Chat;
