import styles from './Footer.module.css';
import { trackEvent } from '@/utils/analytics';

const Footer = () => {
  const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK || "#";
  const twitterLink = process.env.NEXT_PUBLIC_TWITTER_LINK || "#";
  const emailLink = process.env.NEXT_PUBLIC_CONTACT_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}` : "mailto:hello@learnarchi.com";

  const handleSocialClick = (platform: string) => {
    trackEvent('click_footer_social', { platform });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>LEARNARCHI</h3>
          <p>A community built by and for architecture students—focused on clear thinking, honest process, and confident growth.</p>
        </div>
        <div className={styles.links}>
          <a 
            href={instagramLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
            onClick={() => handleSocialClick('instagram')}
          >
            INSTAGRAM
          </a>
          <span className={styles.divider}>•</span>
          <a 
            href={twitterLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
            onClick={() => handleSocialClick('twitter')}
          >
            TWITTER
          </a>
          <span className={styles.divider}>•</span>
          <a 
            href={emailLink} 
            className={styles.link}
            onClick={() => handleSocialClick('email')}
          >
            EMAIL
          </a>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 / ALL RIGHTS RESERVED / BUILT FOR THE FUTURE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
