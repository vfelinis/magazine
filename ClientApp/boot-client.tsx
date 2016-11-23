import './css/site.css';
import 'bootstrap';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './configureStore';
import { ApplicationState }  from './store';

// Get the application-wide store instance, prepopulating with state from the server where available.
//const initialState = (window as any).initialReduxState as ApplicationState;
const initialState = {
	grid:{
		images: [
			'image/1.jpg',
			'image/2.jpg',
			'image/3.jpg',
			'image/4.jpg',
			'image/5.jpg',
			'image/6.jpg',
			'image/7.jpg',
			'image/8.jpg',
			'image/9.jpg',
			'image/10.jpg',
			'image/11.jpg',
			'image/12.jpg',
			'image/13.jpg',
			'image/14.jpg',
			'image/15.jpg',
			'image/16.jpg',
			'image/17.jpg',
			'image/18.jpg',
			'image/19.jpg',
			'image/20.jpg'		
		]
	}	
} as ApplicationState;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

// This code starts up the React app when it runs in a browser. It sets up the routing configuration
// and injects the app into a DOM element.
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } children={ routes } />
    </Provider>,
    document.getElementById('react-app')
);