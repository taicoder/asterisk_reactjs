import React, { Fragment } from 'react';
import FreePBX from './asterisk/FreePBX';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Account from './asterisk/Account'
import Login from './asterisk/Login'

//End MyTest

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/freepbx" component={FreePBX} />
					<Route path="/account" component={Account} />
					<Route path="/login" component={Login} />
                    <Route path="/" exact component={FreePBX} />
					{/* Dòng này bắt buộc để cuối cùng */}
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
