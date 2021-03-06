import { useState, useEffect, useContext} from 'react';

import UserContext from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';

// - In here, create a default function that is exported called 'useFollowedUsersPhotos'
// - Create state for 'photos'
// - Import the 'UserContext' and destructure out the 'uid' from the user object and alias the 'uid' to 'userId'--setting a default value of an empty string for userId
// - Create an async function within this hook called 'getTimelinePhotos', which will be called within a 'useEffect', at the moment we can just leave this function empty, but make sure we call it
// - Add 'userId' to the 'useEffect' dependency array
// - Return '{ photos }'

// References
// - https://reactjs.org/docs/hooks-effect.html

export default function useFollowedUsersPhotos() {

  // Null because Want a false value so we can use Skeleton
  // When Firebase gives info, empty array or full array, then we render
  const [photos, setPhotos] = useState(null);
  const { user: { uid: userId = '' } } = useContext(UserContext);
  
  useEffect(() => {
    
    async function getTimelinePhotos() {
      // go ahead and get the following user ids with getUserByUserId()
      // Who does this particular profile follow?
      // followingUserIds (getUserByUserId)
      const followingUserIds = await getUserByUserId(userId);
      // assign a variable to followedUserPhotos = []
      const followedUserPhotos = [];
      
      // everything below this line will be for the truthy value
      // do we have followingUserIds? If we do, we know that the return value is a map (an array)
      // First value [0] has 'following' as an object property. Is the length > 0
      if (followingUserIds && followingUserIds[0].following.length > 0) {
        
        followedUserPhotos = await getUserFollowedPhotos(userId, followingUserIds[0].following);
        // we need to call a function that will get us the photos
        // rearrange the array so that the newest photos are first. (use the property .dateCreated)
        followedUserPhotos.sort((a,b) => b.dateCached - a.dateCreated);
        //once we have photos, set the state
        setPhotos(followedUserPhotos);
     	
     	// TAKEN OUT? const followedUserPhotos = getUserFollowedPhotos(userId, followingUserIds)
        
        
      }
    }
    
    getTimelinePhotos();
     
  }, [userId]); 
  
  return { photos };
}