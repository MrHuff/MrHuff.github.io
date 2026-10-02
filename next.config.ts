import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES_BUILD === "1";

const nextConfig: NextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      // Vinext's prerenderer does not follow trailing-slash redirects.
      // prepare-pages.mjs creates directory entry points for GitHub Pages.
      trailingSlash: false,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
