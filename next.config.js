const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = {
  cssModules: true,
  withSass,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[name]_[local]_[hash:6]',
  },

  webpack: (config) => {
    config.module.rules.push({
        exclude: [/node_modules/],
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: '/_next/static',
              outputPath: 'static',
              name: '[name]-[contenthash:8].[ext]',
            },
          },
        ],
    }),

    {
      enforce: 'pre',
      test: /.scss$/,
      loader: 'sass-resources-loader',
      options: {
        resources: ['./global/scss/_variables.scss', './global/scss/_reset.scss', './global/scss/_global.scss'],
      },
    },

    config.resolve.alias = {
      ...config.resolve.alias,
      $src: path.resolve(__dirname, 'src'),
    }
    
    return config
  },
}
