import React, { useEffect } from 'react';

export default function Signup() {

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = 'Signup — Instagram';
  }, []);
  
  return (
    <p>Hello from Signup</p>
  )
}