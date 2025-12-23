# PWA Testing & Configuration Guide

## 📱 Testing Your PWA

### Using Chrome DevTools Lighthouse

1. **Open Chrome DevTools**

   - Press `F12` or right-click → Inspect
   - Navigate to the "Lighthouse" tab

2. **Run PWA Audit**

   ```
   - Select "Progressive Web App" category
   - Choose "Mobile" device
   - Click "Analyze page load"
   ```

3. **Check Requirements**
   - ✅ Installable
   - ✅ PWA Optimized
   - ✅ Fast and reliable
   - ✅ Works offline

### Manual Testing Checklist

#### Desktop (Chrome/Edge)

- [ ] Install button appears in address bar
- [ ] App installs successfully
- [ ] Opens in standalone window
- [ ] Works offline after first visit
- [ ] Service worker registers

#### Mobile (Android)

- [ ] "Add to Home Screen" prompt appears
- [ ] App icon appears on home screen
- [ ] Splash screen shows on launch
- [ ] Runs in fullscreen mode
- [ ] Works offline

#### iOS (Safari)

- [ ] Share → "Add to Home Screen" works
- [ ] App icon displays correctly
- [ ] Launches in standalone mode

## 🔧 PWA Configuration

### Current Setup

✅ **Manifest** (`/public/manifest.json`)

- App name and description
- Icons (72px to 512px)
- Theme color: #4d6cff
- Display: standalone
- Shortcuts configured

✅ **Service Worker** (`/public/sw.js`)

- Caching strategy
- Offline support
- Background sync
- Push notifications ready

✅ **Install Button**

- Floating button (bottom-right)
- Auto-shows when installable
- Hides after installation

### Icon Sizes Generated

- 72x72px
- 96x96px
- 128x128px
- 144x144px
- 152x152px (Apple)
- 192x192px
- 384x384px
- 512x512px

## 🔔 Push Notifications Setup

### Prerequisites

1. HTTPS domain (required)
2. VAPID keys for authentication
3. Push notification service

### Generate VAPID Keys

```bash
npx web-push generate-vapid-keys
```

### Server-Side Setup (Example with Node.js)

```javascript
const webpush = require("web-push");

// Set VAPID details
webpush.setVapidDetails(
  "mailto:your-email@example.com",
  "YOUR_PUBLIC_VAPID_KEY",
  "YOUR_PRIVATE_VAPID_KEY"
);

// Send notification
const subscription = {
  endpoint: "...",
  keys: {
    auth: "...",
    p256dh: "...",
  },
};

const payload = JSON.stringify({
  title: "LearnArchi Update",
  body: "New content available!",
  icon: "/icons/icon-192x192.png",
});

webpush.sendNotification(subscription, payload);
```

### Client-Side Subscription

Add to your app:

```typescript
// Request permission
const permission = await Notification.requestPermission();

if (permission === "granted") {
  // Get service worker registration
  const registration = await navigator.serviceWorker.ready;

  // Subscribe to push
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: "YOUR_PUBLIC_VAPID_KEY",
  });

  // Send subscription to your server
  await fetch("/api/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: { "Content-Type": "application/json" },
  });
}
```

## 🚀 Deployment Checklist

### Before Deploying

- [ ] Test on localhost with `npm run dev`
- [ ] Run Lighthouse audit (score > 90)
- [ ] Test offline functionality
- [ ] Verify all icons load
- [ ] Check manifest.json is accessible

### Production Requirements

1. **HTTPS Required**

   - Service workers only work on HTTPS
   - Use Vercel/Netlify (auto-HTTPS)
   - Or configure SSL certificate

2. **Update URLs**

   ```json
   // In manifest.json
   "start_url": "https://yourdomain.com/",
   "scope": "https://yourdomain.com/"
   ```

3. **Cache Strategy**
   - Review cached resources in sw.js
   - Update CACHE_NAME when deploying
   - Test cache invalidation

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_public_key
VAPID_PRIVATE_KEY=your_private_key
```

## 📊 Monitoring

### Service Worker Status

Check in DevTools → Application → Service Workers:

- Status: Activated and running
- Update on reload: Enabled
- Offline: Test mode

### Cache Storage

DevTools → Application → Cache Storage:

- learnarchi-v1 (should contain cached files)

### Manifest

DevTools → Application → Manifest:

- All fields populated
- Icons load correctly
- Theme color matches

## 🐛 Troubleshooting

### Service Worker Not Registering

```javascript
// Check browser support
if ("serviceWorker" in navigator) {
  console.log("Service Worker supported");
} else {
  console.log("Service Worker not supported");
}
```

### Install Prompt Not Showing

- Must be HTTPS (or localhost)
- User hasn't already installed
- Manifest must be valid
- Service worker must be registered

### Offline Not Working

- Check service worker is active
- Verify cache strategy
- Test with DevTools offline mode

### Icons Not Displaying

- Check file paths in manifest.json
- Verify icons exist in /public/icons/
- Clear cache and reload

## 📱 Testing Tools

1. **Chrome DevTools**

   - Lighthouse
   - Application tab
   - Network throttling

2. **Online Tools**

   - [PWA Builder](https://www.pwabuilder.com/)
   - [Manifest Validator](https://manifest-validator.appspot.com/)

3. **Real Devices**
   - Test on actual phones
   - Different browsers
   - Various network conditions

## 🎯 Performance Targets

- Lighthouse PWA Score: > 90
- Performance Score: > 90
- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Speed Index: < 3.4s

## 📚 Resources

- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web Push Protocol](https://web.dev/push-notifications-overview/)
- [Workbox](https://developers.google.com/web/tools/workbox) - Advanced SW library

---

**Ready to test!** Run `npm run dev` and open Chrome DevTools to start testing your PWA.
