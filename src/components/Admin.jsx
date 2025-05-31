import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, get, set } from 'firebase/database';

const Admin = () => {
  const [views, setViews] = useState(null);

  const fetchViews = async () => {
    const viewsRef = ref(database, 'views');
    const snapshot = await get(viewsRef);
    setViews(snapshot.exists() ? snapshot.val() : 0);
  };

  useEffect(() => {
    fetchViews();
  }, []);

  const resetCount = async () => {
    const viewsRef = ref(database, 'views');
    await set(viewsRef, 0);
    setViews(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Panel</h2>
      <p className='text-white'>Total Views: {views !== null ? views : 'Loading...'}</p>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default Admin;
