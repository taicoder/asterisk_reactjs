import React, { Fragment } from 'react';
import FreePBX from './asterisk/FreePBX';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './NotFound';

//End MyTest

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/freepbx" component={FreePBX} />
          <Route path="/" exact component={FreePBX} />
					{/* Dòng này bắt buộc để cuối cùng */}
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
