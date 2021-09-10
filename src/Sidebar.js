import React, {useState, useEffect} from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase';

function Sidebar() {

	const [rooms, setrooms] = useState([]);

	useEffect(() => {
		db.collection('rooms').onSnapshot(
			snapshot => 
			setrooms(
				snapshot.docs.map(
					(docs) =>({
						id:docs.id,
						data: docs.data()
					})
				)
			));
	}, [])

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLarge />
					</IconButton>
					<IconButton>
						<Chat />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined />
					<input placeholder="search or start new chat" type="text" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SidebarChat addNewChat />
				{rooms.map(
					room => (
						<SidebarChat key={room.id} id={room.id} name = {room.data.name} />
					)
				)}
			</div>
		</div>
	);
}

export default Sidebar;
