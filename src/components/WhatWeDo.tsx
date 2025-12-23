import Image from 'next/image';
import styles from './WhatWeDo.module.css';

const offerings = [
  "Weekly short classes on tools, thinking, and representation",
  "Design reviews focused on process and clarity",
  "Open discussions and shared resources",
  "Exposure to competitions, jobs, and growth pathways",
  "A safe space for unfinished ideas and learning in progress"
];

const WhatWeDo = () => {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>WHAT YOU GET <span className={styles.accent}>NOW</span></h2>
            <p className={styles.subtitle}>Community Benefits</p>
            <div className={styles.grid}>
              {offerings.map((item, index) => (
                <div key={index} className={styles.card}>
                  <p className={styles.text}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/community.png" 
              alt="Community Collaboration" 
              width={500}
              height={500}
              className={styles.communityImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
