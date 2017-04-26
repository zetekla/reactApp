var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 7777,
      historyApiFallback: true,
      contentBase: './',
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