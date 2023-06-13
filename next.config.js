/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images.podbay.fm",
        pathname: "/***",
        port: "",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        pathname: "/image/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "is2-ssl.mzstatic.com",
        pathname: "/image/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "is3-ssl.mzstatic.com",
        pathname: "/image/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "is4-ssl.mzstatic.com",
        pathname: "/image/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "is5-ssl.mzstatic.com",
        pathname: "/image/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "is6-ssl.mzstatic.com",
        pathname: "/image/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
