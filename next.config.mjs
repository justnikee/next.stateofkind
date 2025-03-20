/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          pathname: '/**',
        },
      ],
        domains: ['images.unsplash.com', 'res.cloudinary.com'], // Add any other domains you need to allow
      },
};

export default nextConfig;
