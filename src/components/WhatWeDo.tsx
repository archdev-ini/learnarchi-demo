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
        <h2 className={styles.sectionTitle}>WHAT YOU GET <span className={styles.accent}>NOW</span></h2>
        <div className={styles.grid}>
          {offerings.map((item, index) => (
            <div key={index} className={styles.card}>
              <p className={styles.text}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
