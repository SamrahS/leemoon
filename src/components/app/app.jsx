import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingScreen from '../landingScreen';

function App() {
	return (
		<Switch>
			<Route title="Leemoon" component={LandingScreen} path="/" exact />

			{/*			<Route path="*">
				<PageNotFound />
			</Route> */}
		</Switch>
	);
}

export default App;
