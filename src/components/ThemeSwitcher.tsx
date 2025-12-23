'use client';

import { useTheme } from '../contexts/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const themes = [
  { id: 'light', name: 'Light', icon: '☀️' },
  { id: 'dark', name: 'Dark', icon: '🌙' },
  { id: 'midnight', name: 'Midnight', icon: '🌃' },
  { id: 'sunset', name: 'Sunset', icon: '🌅' },
] as const;

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.switcher}>
      <div className={styles.dropdown}>
        <button className={styles.trigger}>
          <span className={styles.icon}>
            {themes.find(t => t.id === theme)?.icon}
          </span>
          <span className={styles.label}>Theme</span>
        </button>
        <div className={styles.menu}>
          {themes.map((t) => (
            <button
              key={t.id}
              className={`${styles.option} ${theme === t.id ? styles.active : ''}`}
              onClick={() => setTheme(t.id)}
            >
              <span className={styles.optionIcon}>{t.icon}</span>
              <span className={styles.optionName}>{t.name}</span>
              {theme === t.id && <span className={styles.check}>✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
