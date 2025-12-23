'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import skeletonStyles from './Skeleton.module.css';

const Hero = () => {
  const [imgState, setImgState] = useState<'loading' | 'loaded' | 'error'>('loading');

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
      <div className={`${styles.imageContainer} ${imgState === 'loading' ? skeletonStyles.shimmer : ''}`}>
        {imgState === 'error' ? (
          <div className={skeletonStyles.imagePlaceholder}>
            Image Unavailable
          </div>
        ) : (
          <Image
            src="/images/hero-workspace.png"
            alt="Architectural workspace"
            width={600}
            height={600}
            className={`${styles.heroImage} ${imgState === 'loaded' ? styles.imageVisible : styles.imageHidden}`}
            priority
            onLoad={() => setImgState('loaded')}
            onError={() => setImgState('error')}
          />
        )}
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
};

export default Hero;
