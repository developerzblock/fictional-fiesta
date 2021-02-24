import React from 'react';
import Image from 'react';

// =====================
// Login.js page
// =====================

// =====================
// Structure
// =====================
// - div (parent)
// 	- div (child)
// 	- div (child)
// 		- div (child of child)
// 		- div (child of child)


// A container div that holds children
// 	- div
// 		- image of src /images/iphone-with-profile.jpg & alt tag of "iPhone with Instagram app"

// 	- div to wrap the following children
// 		- div -> (another div to wrap the form (see below for further details of the form)
// 		- div -> a paragraph with a React router link that allows to the user to navigate to 'Sign up' - use the ROUTES file to link to this particular page

// A form for the user to login with a method of POST

// An input box for the user to enter their email address with a placeholder value of Email Address

// An input box for the user to enter their password with a placeholder value of Password

// A button so that the user can submit the form

// References:
// 	- Tailwind container: https://tailwindcss.com/docs/container
// 	- Tailwind flex: https://tailwindcss.com/docs/flex

export default function Login() {
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      
      <div className="flex w-3/5 px-6">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
      </div>
      
      <div className="flex flex-col w-2/5 p-6 border-1 border-solid border-gray-300 items-center text-center">
        <div className="">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-2/5" />
          </h1>
          <form />
        </div>
        <div className="">
          <p>Dont have an account? <a href="#" title="Sign up">Sign up</a></p>
        </div>
      </div>
      
    </div>
  )
}