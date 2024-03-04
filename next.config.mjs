// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Adjust these settings to match your GitHub repository name
    basePath: '/CNCF-Lahore.github.io',
    assetPrefix: '/CNCF-Lahore.github.io/',
    images: {
        loader: 'akamai',
        path: '',
    },
    // Additional configurations can go here
};

export default nextConfig;
