import React, { useEffect } from 'react';

export default function NotFound() {

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = '404 Not Found — Instagram';
  }, []);
  
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text2xl">404 Not Found!</p>
      </div>
    </div>
  )
}