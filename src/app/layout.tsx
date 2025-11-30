import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Art of Planning | AI Hackathon - Session 2",
  description: "How I Stopped Fighting AI and Started Shipping. A 60-Minute Journey from 'I Can't' to 'I'm Building'",
  keywords: ["AI", "planning", "vibe coding", "hackathon", "Claude", "development"],
  authors: [{ name: "Longy" }],
  openGraph: {
    title: "The Art of Planning | AI Hackathon",
    description: "How I Stopped Fighting AI and Started Shipping",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="blueprint-grid" />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
