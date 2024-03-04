/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    basePath: '/CNCF-Lahore.github.io',
    assetPrefix: '/CNCF-Lahore.github.io/',
    // If you have specific configurations for images, they should be defined here, not under "experimental"
    images: {
        // Example configuration - adjust according to your needs
        domains: ['http://cncf-lahore.github.io/'],
    },
    // Ensure there are no configurations nested under "experimental" unless you're using features explicitly labeled as experimental by Next.js documentation
};

module.exports = nextConfig;
