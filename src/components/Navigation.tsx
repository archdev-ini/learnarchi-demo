'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import JoinModal from './JoinModal';

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">LEARNARCHI</Link>
          </div>
          <div className={styles.links}>
            <Link href="#mission" className={styles.link}>Mission</Link>
            <Link href="#method" className={styles.link}>Method</Link>
            <Link href="#benefits" className={styles.link}>Benefits</Link>
            <Link href="#vision" className={styles.link}>Vision</Link>
            <button onClick={() => setIsModalOpen(true)} className={styles.cta}>
              Join Community
            </button>
          </div>
        </div>
      </nav>
      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navigation;
