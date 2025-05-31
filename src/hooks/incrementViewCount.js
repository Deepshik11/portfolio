// useIncrementView.js (or incrementView.js)
import { database } from '../firebase';
import { ref, get, set } from 'firebase/database';

export const incrementViewCount = async () => {
  const viewsRef = ref(database, 'views');
  const snapshot = await get(viewsRef);
  const currentViews = snapshot.exists() ? snapshot.val() : 0;
  await set(viewsRef, currentViews + 1);
};
