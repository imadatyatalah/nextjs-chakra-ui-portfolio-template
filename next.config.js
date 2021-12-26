const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
});
