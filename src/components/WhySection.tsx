import Image from 'next/image';
import styles from './WhySection.module.css';

const WhySection = () => {
  return (
    <section id="mission" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headline}>
            ARCHITECTURE SCHOOL TEACHES YOU HOW TO <span className={styles.accent}>PRODUCE</span>.
          </h2>
          <h2 className={styles.headline}>
            LEARNARCHI HELPS YOU UNDERSTAND <span className={styles.accent}>HOW TO THINK</span>.
          </h2>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/education-gap.png"
              alt="The gap between education and practice"
              width={800}
              height={400}
              className={styles.sectionImage}
            />
          </div>
          <div className={styles.description}>
            <p>
              Many students leave school unsure of their direction, confidence, or relevance 
              in a profession that&apos;s constantly evolving.
            </p>
            <p>
              The gap isn&apos;t talent—it&apos;s clarity, exposure, and real-world understanding.
            </p>
            <p className={styles.emphasis}>
              LearnArchi exists to help you become better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
