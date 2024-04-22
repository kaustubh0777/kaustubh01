/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        YOUR_SERVICE_ID:process.env.YOUR_SERVICE_ID,
        YOUR_PUBLIC_KEY:process.env.YOUR_PUBLIC_KEY,
        YOUR_TEMPLATE_ID:process.env.YOUR_TEMPLATE_ID,
    },
};

export default nextConfig;
