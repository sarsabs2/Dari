const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
    reactStrictMode: false,
    env: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dpev5abqw",
    },
  };
module.exports = withNextIntl(nextConfig);
