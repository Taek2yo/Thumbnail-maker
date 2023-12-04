import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Home from './components/pages/Home';
import { GlobalFont } from './styles/global/GlobalFont';

function App() {
	return (
		<Provider store={store}>
			<GlobalFont />
			<Home />
		</Provider>
	);
}

export default App;
