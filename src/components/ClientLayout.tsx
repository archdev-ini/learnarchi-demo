'use client';

import Navigation from './Navigation';
import Footer from './Footer';
import PWARegister from './PWARegister';
import InstallButton from './InstallButton';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PWARegister />
      <InstallButton />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
