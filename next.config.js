/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://k-cinema-backend-production.up.railway.app/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://k-cinema-backend-production.up.railway.app/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
