import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import '../css/layout/layout.css';
import Index from './containers/index';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store=configureStore();

ReactDOM.render(
	<Provider store={store}>
	<Index />
	</Provider>, document.getElementById('example'));
