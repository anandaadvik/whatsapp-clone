import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';

function App() {
	const [user, setuser] = useState(null);

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app__block">
					<Router>
						<Sidebar />
						<Switch>
							<Route path="/rooms/:roomId">
								<Chat />
							</Route>
						</Switch>
					</Router>
				</div>
			)}
		</div>
	);
}

export default App;
