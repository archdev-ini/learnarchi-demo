import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LearnArchi | Beyond the Classroom",
  description:
    "A community built by and for architecture students — focused on clear thinking, honest process, and confident growth.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LearnArchi",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
    ],
  },
  themeColor: "#4d6cff",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />
      </head>
      <body className={`${inter.variable} ${sourceSerif.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
