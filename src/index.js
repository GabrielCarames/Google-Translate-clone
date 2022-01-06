import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import languageHistoryReducer from './store/languageHistoryReducer'
import changeLanguageReducer from './store/changeLanguageReducer'
import './scss/index.css';
import App from './App';

const app = combineReducers({
    changeLanguageReducer, languageHistoryReducer,
})

let store = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
