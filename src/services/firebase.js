import { firebase, FieldValue } from '../lib/firebase';

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