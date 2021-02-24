import React, { useEffect } from 'react';

export default function NotFound() {

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = '404 Not Found — Instagram';
  }, []);
  
  return (
    <p>Hello from NotFound</p>
  )
}