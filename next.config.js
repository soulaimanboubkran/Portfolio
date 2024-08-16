/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/CV.pdf',
        destination: '/SoulaimaneBouiboukirn.pdf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
