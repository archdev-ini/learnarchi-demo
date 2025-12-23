import styles from './HowSection.module.css';

const principles = [
  {
    title: "FIRST-PRINCIPLES, NOT IMITATION",
    description: "Understand the fundamentals so you can reason, adapt, and design with intention."
  },
  {
    title: "COMMUNITY-LED GROWTH",
    description: "We learn together, support one another, and grow through shared effort."
  },
  {
    title: "BEYOND THE CLASSROOM",
    description: "Practical skills, tools, mindsets, and industry context that schools often overlook."
  },
  {
    title: "CONSISTENCY & ACCOUNTABILITY",
    description: "Quiet discipline, honest work, and responsibility to yourself and your community."
  },
  {
    title: "SERVICE-ORIENTED LEADERSHIP",
    description: "Impact over visibility—growth measured by how many people you help."
  }
];

const HowSection = () => {
  return (
    <section id="method" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>HOW WE LEARN</h2>
        <div className={styles.grid}>
          {principles.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSection;
