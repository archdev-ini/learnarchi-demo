import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>LEARNARCHI</h3>
          <p>A community built by and for architecture students—focused on clear thinking, honest process, and confident growth.</p>
        </div>
        <div className={styles.links}>
          <a href="#" className={styles.link}>INSTAGRAM</a>
          <span className={styles.divider}>•</span>
          <a href="#" className={styles.link}>TWITTER</a>
          <span className={styles.divider}>•</span>
          <a href="#" className={styles.link}>EMAIL</a>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 / ALL RIGHTS RESERVED / BUILT FOR THE FUTURE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
