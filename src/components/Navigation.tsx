'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import JoinModal from './JoinModal';

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">LEARNARCHI</Link>
          </div>
          
          {/* Hamburger Button */}
          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Desktop & Mobile Menu */}
          <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <Link href="#mission" className={styles.link} onClick={handleLinkClick}>Mission</Link>
            <Link href="#method" className={styles.link} onClick={handleLinkClick}>Method</Link>
            <Link href="#benefits" className={styles.link} onClick={handleLinkClick}>Benefits</Link>
            <Link href="#vision" className={styles.link} onClick={handleLinkClick}>Vision</Link>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }} 
              className={styles.cta}
            >
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
