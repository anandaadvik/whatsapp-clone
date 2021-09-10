import React, {useEffect, useState} from 'react'
import {Avatar} from "@material-ui/core"
import './SidebarChat.css'
import db from './firebase';

function SidebarChat({id, name, addNewChat}) {

    const [seed, setSeed] = useState("");  

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    },[])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            db.collection("rooms").add({name:roomName});
        }
    };
    
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>Lats Message </p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
}

export default SidebarChat
