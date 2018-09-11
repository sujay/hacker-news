// next.config.js
module.exports = {
  poweredByHeader: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.(png)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/hn',
            outputPath: 'static/hn',
            name: '[name]-[hash].[ext]'
          }
        }
      ]
    })
    return config
  }
}
