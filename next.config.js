/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // important for cPanel hosting
};

module.exports = nextConfig;
