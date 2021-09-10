import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="app">
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
		</div>
	);
}

export default App;
