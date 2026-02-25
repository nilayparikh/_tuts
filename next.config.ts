import type { NextConfig } from "next";
import path from "path";

// Vendored framework source lives inside this repo at packages/tutorial-framework/
// Using path.resolve ensures it works on all platforms in both local and CI environments.
const frameworkSrc = path.resolve(
  __dirname,
  "./packages/tutorial-framework/src",
);

// POSIX-relative path for Turbopack (it cannot handle Windows absolute paths)
// Relative to project root → ./packages/...
const frameworkRelative = "./packages/tutorial-framework/src/index.ts";

const nextConfig: NextConfig = {
  /**
   * Static HTML export — every page becomes a standalone .html file.
   * This is required for GitHub Pages deployment.
   */
  output: "export",

  /**
   * If deploying to a sub-path (e.g. https://user.github.io/repo/)
   * set basePath and assetPrefix to '/repo'.
   * Leave empty for custom domain or user/org page (user.github.io).
   */
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',

  images: {
    /**
     * `next/image` optimisation requires a server; disable for static export.
     * Use plain <img> tags or set a remote loader if needed.
     *
     * NOTE: Setting unoptimized: true also mitigates the moderate-severity
     * "Cache Key Confusion" advisory (GHSA-xxxx) since the /_next/image
     * optimization endpoint is never activated in a fully static export.
     */
    unoptimized: true,
  },

  /**
   * Trailing slashes ensure correct relative asset paths on GitHub Pages.
   */
  trailingSlash: true,

  /**
   * Transpile the local tutorial-framework package from source (TypeScript).
   * Required when using a `file:` workspace reference so Next.js can handle
   * JSX/TSX inside the package without a separate build step at dev time.
   */
  transpilePackages: ["@localm/tutorial-framework"],

  /**
   * Turbopack alias (Next.js 15.3+).
   * Must use a POSIX-relative path — Turbopack cannot resolve Windows
   * absolute paths (drive letters / backslashes) as of Next.js 16.
   */
  turbopack: {
    resolveAlias: {
      "@localm/tutorial-framework": frameworkRelative,
    },
  },

  /**
   * Webpack alias — same mapping for `next build --no-turbopack`.
   */
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@localm/tutorial-framework": path.join(frameworkSrc, "index.ts"),
    };
    return config;
  },
};

export default nextConfig;
