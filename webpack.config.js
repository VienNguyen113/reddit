const
    	webpack = require('webpack'),
			path = require('path'),
	  	ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets/',
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			},
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
			{
				test: /\.(css|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
		]
	},
  devServer: {
    port: 5555,
    contentBase: './public',
    inline: true
  },
	plugins: [
	    new ExtractTextPlugin('style.css'),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('development')
				}
			})
	]
}

module.exports = config
