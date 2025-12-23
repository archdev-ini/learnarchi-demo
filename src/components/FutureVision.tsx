import styles from './FutureVision.module.css';

const visionPoints = [
  "Structured learning ecosystems rooted in first principles",
  "Mentorship pipelines for long-term professional growth",
  "A strong network across Africa and beyond",
  "Systems that influence how architects think and work",
  "A recognizable LearnArchi mindset in the industry"
];

const FutureVision = () => {
  return (
    <section id="vision" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>WHERE WE&apos;RE <span className={styles.accent}>GOING</span></h2>
        <p className={styles.statement}>
          WE ARE BUILDING THE SYSTEMS THAT WILL SHAPE THE NEXT GENERATION OF ARCHITECTS.
        </p>
        <div className={styles.list}>
          {visionPoints.map((point, index) => (
            <div key={index} className={styles.item}>
              <p className={styles.text}>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
