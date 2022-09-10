import React from 'react';
//import ReactDOM from 'react-dom';       // Before: react version 17
import ReactDOM from 'react-dom/client';  // After : react version 18
import App from './components/App';
import firebase from "./firebase"
console.log(firebase);

/* v17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

/* v18 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
