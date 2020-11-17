const path = require('path')
const withSass = require('@zeit/next-sass');

module.exports = {
  cssModules: true,
  withSass,
  cssLoaderOptions: {
    importLoaders: 1,
    // localIdentName: '[local]___[hash:base64:5]',
    localIdentName: '[name]_[local]_[hash:6]',
  },

  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // },

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
