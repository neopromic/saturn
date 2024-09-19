/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "pbs.twimg.com"
    }]
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ["pt-BR", "en"],
  },

};

export default nextConfig;
