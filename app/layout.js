import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/index.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://zeeinpajamas.com"),
  title: {
    default: "ZeeInPajamas | Gamer, Designer, and Streamer",
    template: "%s | ZeeInPajamas",
  },
  description:
    "ZeeInPajamas is a gamer, designer, and creative online personality sharing streams, videos, and behind-the-scenes content.",
  keywords: [
    "ZeeInPajamas",
    "gamer",
    "designer",
    "streamer",
    "Twitch",
    "YouTube",
    "gaming",
    "creative",
  ],
  authors: [{ name: "ZeeInPajamas" }],
  alternates: {
    canonical: "https://zeeinpajamas.com",
  },
  openGraph: {
    title: "ZeeInPajamas | Gamer, Designer, and Streamer",
    description:
      "Discover ZeeInPajamas for live streams, gaming highlights, design work, and creative content.",
    url: "https://zeeinpajamas.com",
    siteName: "ZeeInPajamas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/gqUKaQMgMG_1782884025625.png",
        width: 1200,
        height: 630,
        alt: "ZeeInPajamas portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeeInPajamas | Gamer, Designer, and Streamer",
    description:
      "Follow ZeeInPajamas for gaming, design, and creative content across Twitch, YouTube, Instagram, and more.",
    images: ["/gqUKaQMgMG_1782884025625.png"],
    creator: "@ZeeInPajamas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
