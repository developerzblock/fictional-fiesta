import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

ReactDOM.render(
  // Wrap the children and pass in values through here.
  // Don't pass in too many objects, will cause all the children to re-render every time!
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  
  document.getElementById('root')
);
