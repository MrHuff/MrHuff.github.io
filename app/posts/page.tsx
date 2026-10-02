/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages serves static HTML documents. */

import type { Metadata } from "next";
import SiteHeader from "../components/site-header";

const title = "Posts — Robert Hu";
const description = "Writing by Robert Hu on research and code.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/posts/" },
  openGraph: {
    type: "website",
    url: "/posts/",
    title,
    description,
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
    title,
    description,
    images: ["/og.png"],
  },
};

export default function Posts() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="page posts-page">
        <SiteHeader page="posts" />
        <main className="posts-main" id="main">
          <div className="posts-intro">
            <h1>Posts</h1>
            <p className="posts-description">Notes on research and code.</p>
          </div>
          <section className="posts-empty" aria-labelledby="posts-heading">
            <h2 id="posts-heading">No posts yet.</h2>
            <p>
              In the meantime, you can <a href="/#work">explore my research</a>.
            </p>
          </section>
        </main>
        <footer>
          <p>Robert Hu · Machine learning researcher · London</p>
          <a href="/">Back to home</a>
        </footer>
      </div>
    </>
  );
}
