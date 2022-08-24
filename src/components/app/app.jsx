import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../landingScreen';

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />

			{/*			<Route path="*">
				<PageNotFound />
			</Route> */}
		</Routes>
	);
}

export { App };
