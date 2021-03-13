const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./src/scripts/generate-sitemap.jsx")
    }

    return config
  },
}

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
})
