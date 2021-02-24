import React, { useEffect } from 'react';

export default function Profile() {

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = 'Profile — Instagram';
  }, []);
  
  return (
    <p>Hello from Profile</p>
  )
}