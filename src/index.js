import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    {
      /**
       * IMPLEMENT REACT CONTEXT
       * Step 2: 
       *    - Import StateProvider and grap the App component
       *    - Provide the initialState[How look the data in the begginning] and reducer[How the data is manipulate] properties
       *    - create the reducer.js
       * 
       *    -JUST to one Example. go to Product.js and watch how works 
       */
    }
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
