import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import UserContext from '../context/user';
import * as ROUTES from '../constants/routes';
import { HomeIcon, Signout } from './icons/icons.js';

export default function Header() {
 const { firebase } = useContext(FirebaseContext);
 
 //const user = null;
 const { user } = useContext(UserContext);
 
 console.log(user);
  
  return (
    <header className="h-16 bg-white border-b mb-8">
      <div className="container mx-auto max-width-lg h-full">
        <div className="flex justify-between h-full">
          
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1>
              <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                <img src="/images/logo.png" alt="" className="mt-2 w-6/12" />
              </Link>
            </h1>
          </div>
          
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            {user ? (
              
              // Logic here if you have a truthy value on a user
              // Use Firebase's firebase.auth().signOut()
              <>
                <Link to={ROUTES.DASHBOARD} aria-label="Home" className="w-8 mr-6 text-black-light cursor-pointer">
                  <HomeIcon />
                </Link>
                
                <button
                  type="button"
                  title="Sign Out"
                  className="w-8 mr-6 text-black-light cursor-pointer"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  <Signout />
                </button>
                
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`} aria-label="Home">
                    <img
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile picture`}
                      className="rounded-full h-8 w-8 flex"
                    />
                  </Link>
                </div>
              </>
                
            ) : (
              
              <>
                <Link to={ROUTES.LOGIN} aria-label="Login">
                  <button
                    type="button"
                    className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Login
                  </button>
                </Link>
                
                <Link to={ROUTES.SIGNUP} aria-label="Sign Up">
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
                
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
}