import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Home from './components/pages/Home';
import { GlobalStyle } from './styles/global/GlobalStyle';

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Home />
		</Provider>
	);
}

export default App;
