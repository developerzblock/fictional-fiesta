import React from 'react';
import useUser from '../../hooks/use-user';

// Implement our useUser hook!

export default function Sidebar() {

  // - Destructure out the values from 'user'.    {user: {}}
  // - The values we want are docId, userId, following, username, fullName
  // - Make sure we see the values by using console.log (these can be removed once verified)
  const { user: { docId, userId, following, followers, username, fullName } = {} } = useUser();
  
  console.log(docId);

  return (
    <p>I am the sidebar { fullName }</p>
  )
}