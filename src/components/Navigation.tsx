'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import JoinModal from './JoinModal';
import { trackEvent } from '@/utils/analytics';

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (section: string) => {
    setIsMobileMenuOpen(false);
    trackEvent('nav_click', { section });
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/" onClick={() => trackEvent('nav_click', { section: 'logo' })}>LEARNARCHI</Link>
          </div>
          
          {/* Hamburger Button */}
          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              trackEvent('mobile_menu_toggle', { state: !isMobileMenuOpen ? 'open' : 'closed' });
            }}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Desktop & Mobile Menu */}
          <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
            <Link href="#mission" className={styles.link} onClick={() => handleLinkClick('mission')}>Mission</Link>
            <Link href="#method" className={styles.link} onClick={() => handleLinkClick('method')}>Method</Link>
            <Link href="#benefits" className={styles.link} onClick={() => handleLinkClick('benefits')}>Benefits</Link>
            <Link href="#vision" className={styles.link} onClick={() => handleLinkClick('vision')}>Vision</Link>
            <button 
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
                trackEvent('cta_click', { location: 'nav' });
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
