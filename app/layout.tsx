import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrhuff.github.io"),
  title: "Robert Hu — Machine Learning Researcher",
  description:
    "Robert Hu works on systems and numerical methods for efficient pre-training and inference, causally informed learning, and predictive machine learning.",
  authors: [{ name: "Robert Hu", url: "https://mrhuff.github.io/" }],
  creator: "Robert Hu",
  keywords: [
    "Robert Hu",
    "machine learning",
    "FP4",
    "CUDA",
    "low-precision training",
    "causal inference",
    "kernel methods",
    "recommender systems",
    "interpretable machine learning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Robert Hu — Machine Learning Researcher",
    description:
      "Systems and numerics for efficient learning, with work in causal and predictive machine learning.",
    siteName: "Robert Hu",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Portrait of Robert Hu, machine learning researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Hu — Machine Learning Researcher",
    description:
      "Systems and numerics for efficient learning, with work in causal and predictive machine learning.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
