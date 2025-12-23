'use client';

import { useEffect, useState } from 'react';
import styles from './PWARegister.module.css';

export default function PWARegister() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        
        console.log('Service Worker registered:', registration);

        // Check for updates on load
        if (registration.waiting) {
          setWaitingWorker(registration.waiting);
          setShowUpdate(true);
        }

        // Listen for new waiting worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setWaitingWorker(newWorker);
                setShowUpdate(true);
              }
            });
          }
        });

        // Periodic update check
        const updateInterval = setInterval(() => {
          registration.update();
        }, 60000); // Check every minute

        return () => clearInterval(updateInterval);
      } catch (error) {
        console.log('Service Worker registration failed:', error);
      }
    };

    registerServiceWorker();

    // Listen for controllerchange to reload
    const handleControllerChange = () => {
      window.location.reload();
    };

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);

    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    };
  }, []);

  const handleUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
      setShowUpdate(false);
    }
  };

  return (
    <>
      {showUpdate && (
        <div className={styles.toast}>
          <span className={styles.text}>New architectural updates available!</span>
          <button onClick={handleUpdate} className={styles.button}>
            Reload to Update
          </button>
        </div>
      )}
    </>
  );
}
