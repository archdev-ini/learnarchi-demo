'use client';

import { useState } from 'react';
import styles from './FinalCTA.module.css';
import JoinModal from './JoinModal';

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="join" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.headline}>
            MORE THAN A LEARNING HUB—<br />
            <span className={styles.italic}>a movement</span>.
          </h2>
          <p className={styles.description}>
            A global network of architecture students united by curiosity, collaboration, 
            and the drive to improve the profession from the ground up.
          </p>
          <p className={styles.mission}>
            LearnArchi helps architecture students and young designers grow beyond the classroom—building 
            clarity, capability, and confidence through first-principles learning, shared process, 
            and community-driven growth.
          </p>
          <button onClick={() => setIsModalOpen(true)} className={styles.button}>
            JOIN LEARNARCHI →
          </button>
        </div>
      </section>
      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FinalCTA;
