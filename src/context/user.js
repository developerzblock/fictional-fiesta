import { createContext } from 'react';

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// If we're on login or signin page, we do not want to initialize the user again
// We'll wrap the app in this UserContext thru App.js
const UserContext = createContext(null);
export default UserContext;