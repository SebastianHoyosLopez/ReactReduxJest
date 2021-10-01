import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/App';
import store from './redux/rootReducer';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
