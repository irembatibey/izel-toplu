import createMDX from '@next/mdx';

/**
 * Static export configuration for GitHub Pages.
 *
 * basePath / assetPrefix:
 * Left unset for now. This project will deploy to a custom domain
 * (confirmed by the client), which is served at the domain root —
 * so basePath should stay empty. If the deployment target ever
 * changes to a GitHub project page without a custom domain
 * (username.github.io/izel-toplu), basePath and assetPrefix would
 * need to be set to '/izel-toplu' at that time. Documented here so
 * this decision isn't silently wrong later — see Phase 1 report.
 */
const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Next's built-in image optimization requires a server and is not
    // available under static export. Images are optimized manually
    // (correct formats/sizes) instead — see performance strategy.
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);
