/**
 * Simple analytics utility for LearnArchi
 * In production, this can be integrated with Vercel Analytics, Google Analytics, etc.
 */

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // 1. Console Log for Local Debugging
  console.log(`[Analytics Event]: ${eventName}`, properties || '');

  // 2. Placeholder for Production Analytics (e.g. Vercel)
  // if (typeof window !== 'undefined' && (window as any).va) {
  //   (window as any).va.track(eventName, properties);
  // }
  
  // 3. Optional: Send to internal API
  /*
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({ eventName, properties, timestamp: Date.now() }),
  }).catch(() => {});
  */
};
