import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TimeElapsed from './TimeElapsed';

function App() {
	// console.log(typeof selectedDate); // Date object

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TimeElapsed />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

