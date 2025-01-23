/** @type {import('next').NextConfig} */
import MillionLint from "@million/lint";

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

export default MillionLint.next({ rsc: true })(nextConfig);
