import React, { useState, useEffect } from 'react';

const OnlineStatusChecker = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const Online = () => setOnline(true);
    const Offline = () => setOnline(false);

    window.addEventListener('online', Online);
    window.addEventListener('offline', Offline);

    return () => {
      window.removeEventListener('online', Online);
      window.removeEventListener('offline', Offline);
    };
  }, []);

  return (
    <div>
      <h2>
        Status: {online ? 'Online😎' : 'Offline'}
      </h2>
    </div>
  );
};

export default OnlineStatusChecker;
