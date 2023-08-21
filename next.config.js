/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.giphy.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',

            }
        ],
    },
}

module.exports = nextConfig
