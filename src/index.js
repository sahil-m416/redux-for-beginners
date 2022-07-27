import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

//! create store will take one thing i.e., reducer

// // STORE -> Is a globalised state, holds all the data of our application...
// it is accessible everywhere

// // ACTION -> describes what you want to do
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }
// // REDUCER -> How your action is going to modify you last store into new store

// const counter = (state=0, action) => {
//     switch(action.type){
//       case 'INCREMENT':
//         return state+1
//       case 'DECREMENT':
//         return state-1
//       default:
//         return 0
//     }
// }


// let store = createStore(counter);
// store.subscribe(() => console.log(store.getState()))
// // DISPATCH -> where we can actually emit command to hit the store
// store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
