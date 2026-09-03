import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrhuff.github.io"),
  title: "Robert Hu — Machine Learning Research Scientist",
  description:
    "Robert Hu is a research scientist working on FP4 pretraining, CUDA kernels, long-context attention, causal inference, and scalable statistical machine learning.",
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
    "Graphcore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Robert Hu — From theorem to throughput",
    description:
      "Research in low-precision training, efficient AI systems, and statistical machine learning.",
    siteName: "Robert Hu",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 910,
        alt: "Robert Hu — Machine learning, from theorem to throughput",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Hu — From theorem to throughput",
    description:
      "Research in low-precision training, efficient AI systems, and statistical machine learning.",
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
  themeColor: "#f3f0e8",
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
