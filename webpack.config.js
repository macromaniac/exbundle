var path = require("path");

module.exports = {
	entry: { 'main': './js/app.js' },
	debug: true,
	devtool: 'source-map',
	output: {
		filename: '[name].bundle.js',
		devtoolModuleFilenameTemplate: '[resource-path]'
	},
	module: {
		preLoaders: [
		  {
		  	test: /\.js$/,
		  	loader: "source-map-loader"
		  }
		]
	}
};