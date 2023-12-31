import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Home from './components/pages/Home';
import '../public/style.css';

function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

export default App;
