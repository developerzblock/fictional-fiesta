import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

// =====================
// Login.js page
// =====================

export default function Signup() {

  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [ username, setUsername ] = useState('');
  const [ fullName, setFullName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const [ error, setError ] = useState('');
  const isInvalid = username === '' || fullName === '' || emailAddress === '' || password === "";

  // what happens when a user clicks signup? -> firebase call
  // Acceptance Criteria
  //   - Create a 'handleSignUp' async function (the work inside the function must be in a try/catch) that uses the firebase -> auth -> function 'createUserWithEmailAndPassword' - see references!
  //   - Store the result of the creation into a variable ^^
  //   - Update the user's profile, specifically the 'displayName' field with the username that the user has inputted (which is stored in state)
  //   - Add a new user document to the collection of 'users' with the following values:

  //      - userId (value: take the 'uid' from the created user object -- e.g. createdUserResult.user.uid)
  //      - username
  //      - fullName
  //      - emailAddress
  //      - following: []
  //      - followers: []
  //      - dateCreated (use the time right now)
  
  // - If there's any errors, handle them! Make sure to clean out the form values as well
  // wrap the await function call to firebase in a try/catch
  // error: catch(error)
  // setError(error.message)
  
  // extra learnings: test.com
  // handle the email address validation client side
  // removes a network call!
  
  // - Make sure that username & email address are both lowercase before being submitted
  // - Extra: what happens if a user enters spaces in the username? Validation against the username would be great!

  // References
  //   - https://firebase.google.com/docs/auth/web/password-auth
  //   - https://cloud.google.com/firestore/docs/manage-data/add-data
  
  const handleSignUp = async (event) => {
    event.preventDefault();
    
    try {
      const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(emailAddress, password); // Resolve or Reject
      
      await createdUserResult.user.updateProfile({
        displayName: username
      });
      
      await firebase.firestore.collections('users').add({
        userId: createdUserResult.user.uid,
        username: username.toLowerCase(),
        fullName,
        emailAddress: emailAddress.toLowerCase(),
        following: [],
        followers: [],
        dateCreated: Date.now()
      })
      
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setUsername('');
      setFullName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message); // Comes from Firebase
    }
  }

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = 'Sign Up — Instagram';
  }, []);

  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          
          {error && <p className="mb-4 text-xs text-red-500 text-center">{error}</p>}
          
          <form onSubmit={handleSignUp} method="POST">
            <input aria-label="Enter your username"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray background rounded mb-2"
              type="text"
              value={username}
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value.toLowerCase())}
            />
            <input aria-label="Enter your full name"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              value={fullName}
              placeholder="Full Name"
              onChange={({ target }) => setFullName(target.value)}
            />
            <input aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="email"
              value={emailAddress}
              placeholder="Enter your email address"
              onChange={({ target }) => setEmailAddress(target.value.toLowerCase())}
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
              Sign Up
            </button>
          </form>
        </div>
        
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">Have an account? <Link to={ROUTES.LOGIN} className="font-bold text-blue-500">Log In</Link></p>
        </div>
        
      </div>
    </div>
  )
}