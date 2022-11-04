import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingScreen } from '../landingScreen';
import { ProductsScreen } from '../productsScreen';

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingScreen />} />
			<Route path="/leemoon" element={<ProductsScreen />} />

			{/* <Route path="*">
				<PageNotFound />
			</Route> */}
		</Routes>
	);
}

export { App };
