import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {
	AttachFile,
	InsertEmoticon,
	Mic,
	MoreVert,
	SearchOutlined,
} from '@material-ui/icons';
import './Chat.css';

function Chat() {
	const [seed, setseed] = useState('');
	const [input, setinput] = useState('');

	useEffect(() => {
		setseed(Math.floor(Math.random()));
	}, []);

	const sendMessage = (e) => {
        e.preventDefault();
        console.log("you typed", input);
        setinput("");
    };

	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar
					src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
				/>
				<div className="chat_headerInfo">
					<h3>Room Name</h3>
					<p>Last seen at..</p>
				</div>
				<div className="chat_headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat_body">
				<div className={`chat_message ${true && 'chat_receiver'}`}>
					<span className="chat_name">Mickey</span>
					Hey Guys
					<span className="chat_timestamp">3:53 pm</span>
				</div>
				<div className={`chat_message ${true && 'chat_receiver'}`}>
					<span className="chat_name">Mickey</span>
					Hey Guys
					<span className="chat_timestamp">3:53 pm</span>
				</div>
				<div className={`chat_message ${true && 'chat_receiver'}`}>
					<span className="chat_name">Mickey</span>
					Hey Guys
					<span className="chat_timestamp">3:53 pm</span>
				</div>
			</div>
			<div className="chat_footer">
				<InsertEmoticon />
				<form>
					<input
						value={input}
						onChange={(e) => setinput(e.target.value)}
						type="test"
						placeholder="Type a message"
					/>
					<button onClick={sendMessage} type="submit">
						Send a message
					</button>
				</form>
				<Mic />
			</div>
		</div>
	);
}

export default Chat;
