import React from 'react';
import ReactDOM from 'react-dom';
import { firebase, FieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';

ReactDOM.render(
  // Wrap the children and pass in values through here.
  // Don't pass in too many objects, will cause all the children to re-render every time!
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <h1 className="text-blue-500">Yoooo, World</h1>
  </FirebaseContext.Provider>,
  
  document.getElementById('root')
);
