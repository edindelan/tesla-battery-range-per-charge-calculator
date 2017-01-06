import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './reducers'
import App from './components/App/AppLayout';
import './index.css';

const store = createStore(Reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
