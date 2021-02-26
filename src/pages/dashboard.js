import React, { useEffect } from 'react';
import Header from '../components/header.js';
import Timeline from '../components/timeline.js';
import Sidebar from '../components/sidebar/index.js';

export default function Dashboard() {

  // Update the document title using the browser: API https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    document.title = 'Dashboard — Instagram';
  }, []);
  
  return (
    <div className="bg-gray-100">
      <Header />
      
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <div>
          <Timeline />
        </div>
        
        <div>
          <Sidebar />
        </div>
      </div>
      
    </div>
  )
}