'use client';

import { useState, useEffect } from 'react';
import styles from './TelegramFeed.module.css';
import { trackEvent } from '@/utils/analytics';
import skeletonStyles from './Skeleton.module.css';

interface TelegramMessage {
  id: number;
  text: string;
  date: string;
  link: string;
}

const TelegramFeed = () => {
  const [messages, setMessages] = useState<TelegramMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from /api/telegram-feed
    // For now, we use high-quality mock data to demonstrate the UI
    const fetchMessages = async () => {
      setLoading(true);
      try {
        // Mock delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const mockMessages: TelegramMessage[] = [
          {
            id: 1,
            text: "🚀 New Workshop: 'First Principles of Architectural Reasoning' is now live! Check the resources folder.",
            date: "2 hours ago",
            link: "https://t.me/learnarchi"
          },
          {
            id: 2,
            text: "Community spotlight: Beautiful site analysis work shared today in the #process channel. Check it out!",
            date: "Yesterday",
            link: "https://t.me/learnarchi"
          },
          {
            id: 3,
            text: "Reminder: Weekly design review starts tomorrow at 6PM GMT. Bring your unfinished work!",
            date: "2 days ago",
            link: "https://t.me/learnarchi"
          }
        ];
        
        setMessages(mockMessages);
      } catch (error) {
        console.error("Failed to fetch Telegram feed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <span className={styles.liveIndicator}></span>
            <h2 className={styles.title}>LATEST FROM TELEGRAM</h2>
          </div>
          <a 
            href={process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/learnarchi"} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.viewAll}
            onClick={() => trackEvent('click_telegram_feed_all')}
          >
            VIEW CHANNEL →
          </a>
        </div>

        <div className={styles.feed}>
          {loading ? (
            // Shimmer Loading State
            [1, 2, 3].map((i) => (
              <div key={i} className={`${styles.messageCard} ${skeletonStyles.shimmer}`}>
                <div className={styles.shimmerLine} style={{ width: '80%' }}></div>
                <div className={styles.shimmerLine} style={{ width: '40%' }}></div>
              </div>
            ))
          ) : (
            messages.map((msg) => (
              <a 
                key={msg.id} 
                href={msg.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.messageCard}
                onClick={() => trackEvent('click_telegram_feed_item', { msgId: msg.id })}
              >
                <p className={styles.messageText}>{msg.text}</p>
                <div className={styles.messageFooter}>
                  <span className={styles.date}>{msg.date}</span>
                  <span className={styles.arrow}>↗</span>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TelegramFeed;
