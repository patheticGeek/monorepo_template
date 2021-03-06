const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack: function (config, { defaultLoaders }) {
    const resolvedBaseUrl = path.resolve(config.context, '../../')
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        include: [resolvedBaseUrl],
        use: defaultLoaders.babel,
        exclude: (excludePath) => {
          return /node_modules/.test(excludePath)
        }
      }
    ]
    return config
  }
}
