/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "pbs.twimg.com",
			},
		],
	},
};

export default nextConfig;
