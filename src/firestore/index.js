import app from './firebase';
import * as firestore from 'firebase/firestore';

export function configFireStore() {
  return firestore.getFirestore(app);
}
