import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
  openGraph: {
  title: `👋 ${profile.name} — ${profile.title}`,
    description: profile.summary,
    type: "website"
  },
  metadataBase: new URL("https://siddharthkumarrai.dev")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
