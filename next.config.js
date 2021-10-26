/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/jobs/:id(\\d{1,})/:rest*",
        destination: "/jobs/single/:id/:rest*",
      },
    ];
  },
};
