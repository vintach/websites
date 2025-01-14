/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-mdx-remote', 'vintex'],
  async redirects() {
    return [
      {
        source: '/docs/hooks/:slug',
        destination: '/hooks/:slug',
        permanent: true
      },
      {
        source: '/docs/getting-started/:slug',
        destination: '/guide/:slug',
        permanent: true
      },
      {
        source: '/:lang/guide/installation',
        destination: '/:lang/guide/usage',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
