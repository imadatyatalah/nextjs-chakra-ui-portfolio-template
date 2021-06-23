const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],

  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./src/scripts/generate-sitemap")
    }

    return config
  },
})
