import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// =====================
// Login.js page
// =====================

export default function Login() {

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
          <form method="POST">
            <input aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Enter your email address"
            />
            <input aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className={'bg-blue-500 text-white w-full rounded h-8 font-bold'}
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