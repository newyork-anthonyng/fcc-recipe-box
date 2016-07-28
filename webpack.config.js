module.exports = {
	entry: './src/app.jsx',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [ 'es2015', 'react' ]
				}
			}
		]
	}
};
