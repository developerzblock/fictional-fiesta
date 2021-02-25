import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

// =====================
// Login.js page
// =====================

export default function Login() {

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const [ error, setError ] = useState('');
  const isInvalid = password === '' || emailAddress === "";
  
  // user actions
  // happy & sad scenarios

  // what happens when a user clicks login? -> firebase call
  // a asyncronous function that can handle login
  // handle a succesful login with 
  // await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
  
  // wrap the await function call to firebase in a try/catch
  // error: catch(error)
  // setError(error.message)
  
  // extra learnings: test.com
  // handle the email address validation client side
  // removes a network call!
  
  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password); // Resolve or Reject
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message); // Comes from Firebase
    }
  }

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = 'Login — Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      
      <div className="flex w-3/5 px-6">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
      </div>
      
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            <input aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="email"
              value={emailAddress}
              placeholder="Enter your email address"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'cursor-not-allowed opacity-50'}`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">Dont have an account? <Link to={ROUTES.SIGNUP} className="font-bold text-blue-500">Sign up</Link></p>
        </div>
      </div>
      
    </div>
  )
}