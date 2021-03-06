import { firebase, FieldValue } from '../lib/firebase';

// Service Function: doesUsernameExist(username)
export async function doesUsernameExist(username) {
  
  // All firebase methods are chains
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();
    
  // Get the result, look inside of documents to see if there is a user.
  return result.docs.map((user) => user.data().length > 0);
}

// Service Function: getUserByUserId(userId)
// - A new service function for firebase that is called 'getUserByUserId'
// - This function should query for a userId in the collection of users by the passed userId
export async function getUserByUserId(userId) {
  
  // All firebase methods are chains
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();
    
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));
    
  // Get the result, look inside of documents to see if there is a user.
  return user;
}

// Service Function: getUserFollowedPhotos(userId, followingUserIds)
// - Make a firebase firestore call to the 'photos' collection
// - Use the followingUserIds as an argument to 'where' (look at references)

// References
// - https://firebase.google.com/docs/firestore/query-data/queries
export async function getUserFollowedPhotos(userId, followingUserIds) {

  // All firebase methods are chains
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', followingUserIds)
    .get();
    
  const userFollowedPhotos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }));
  
  // - Create a const called 'photosWithUserDetails' and use 'await Promise.all' to async map over the function 'getUserByUserId' - inside the map we will be going over the array 'userFollowedPhotos', and we want to make this map 'async'
  const photosWithUserDetails = await Promise.all(
    
    // We want this map to give us the ability to do async and await.
    // We dont want it to run over and over, we want to get the result back.
    userFollowedPhotos.map(async (photo) => {
      
      // - Within the map, create a let called 'userLikedPhoto' and assign this to false, once you have done that, check if 'photo.likes.includes' the 'userId' that is passed into the 'getUserFollowedPhotos' function. If it is true, change the 'userLikedPhoto' to true
      let userLikedPhoto = false;
      
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      
      // - After this, create a new const called 'user' and await the response from 'getUserByUserId', we need to pass in the 'photo.userId' here to get the username of the response, so an example would be 'const username = user[0].username'
      const user = await getUserByUserId(photo.userId);
      
      // Get the first username
      const username = user[0].username;
      
      // - return inside the map the username, all the photo properties (spread the result of photo), and lastly userLikedPhoto
      return { username, ...photo, userLikedPhoto };
    })
  )
  
  // - To end this function return 'photosWithUserDetails'
  // - Go to the Timeline and where we are mapping 'I am a photo!', replace it with 'content.username' to see that we get back the username of the photos that we got back from the service call (tip: use the docId on the photos.map for the key!)
  return photosWithUserDetails;
}
