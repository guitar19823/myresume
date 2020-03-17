import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './store';
import './index.css';

const app = (
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
