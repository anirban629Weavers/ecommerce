/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // unoptimized: true,
    domains: [
      "cdn.pixabay.com",
      "cdn.godrej.com",
      "www.godrejinterio.com",
      "source.unsplash.com",
      "mdbootstrap.com",
    ],
  },
};

module.exports = nextConfig;
