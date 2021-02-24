import React, { useEffect } from 'react';

export default function Dashboard() {

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = 'Dashboard — Instagram';
  }, []);
  
  return (
    <p>Hello from Dashboard</p>
  )
}