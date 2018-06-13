const path = require('path');

module.exports = (env) => {
	const environment = env;

	if (environment === env.prod) {
		mode: 'production',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.' + production + 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader"
				},
				{
					test: /\.css$/,
					use: [
						{ loader: 'style-loader'},
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
					]
				}
			]
		}
	} if else (environment === env.dev) {
		mode: 'development',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.' + development + 'bundle.js'
		},
		optimization: {
			minimize: false
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader"
				},
				{
					test: /\.css$/,
					use: [
						{ loader: 'style-loader'},
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						}
					]
				}
			]
		}	
	} ;
};