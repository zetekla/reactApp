var config = {
   entry: './client/main.js',

   output: {
      path:'./client/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 7777,
      compress: true,
      // hot:true,
      historyApiFallback: {
        index: 'index.html',
        rewrites: [
          // { from: /\/soccer/, to: '/soccer.html'}
        ]
      },
      contentBase: './client/',
      proxy: {
        '/api/twitter': {
          target: 'https://queryfeed.net/', // localhost:7777/api/twitter?q=javascript & https://queryfeed.net/twitter?q=javascript
          secure: false,
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,
          "logLevel": "info"
        },
        '/api/posts': {
          target: 'https://jsonplaceholder.typicode.com/',
          secure: false,
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,
          "logLevel": "info"
        },
        '/api/get': {
          target: 'https://httpbin.org/',
          secure: false,
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,
          "logLevel": "info"
        }
      }
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {
          test: /\.css$/,
          loader: "style-loader!css-loader"
         },
         {
          test: /\.png$/,
          loader: "url-loader?limit=100000"
         },
         {
          test: /\.jpg$/,
          loader: "file-loader"
         },
         {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/font-woff'
         },
         {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream'
         },
         {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file'
         },
         {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml'
         }
      ]
   },
   resolve: {
    extensions: ['', '.js', '.jsx', '.es6', '.json', '.coffee'],
   }
};

module.exports = config;