import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          LEARN<br />
          ARCHI<br />
          <span className={styles.accent}>BEYOND</span>
        </h1>
        <p className={styles.subtext}>
          A community built by and for architecture students—focused on clear thinking, 
          honest process, and confident growth.
        </p>
        <div className={styles.metadata}>
          <span>EST. 2025</span>
          <span className={styles.divider}>/</span>
          <span>GLOBAL COMMUNITY</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero-workspace.png"
          alt="Architectural workspace"
          width={600}
          height={600}
          className={styles.heroImage}
          priority
        />
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
};

export default Hero;
