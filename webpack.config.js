const path = require('path');

module.exports = (env) => {
	const environment = env;
	return {
		mode: 'production',
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.' + production + 'bundle.js'
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
	};
};

module.exports = (mode) => {
	const environment = mode;
	return {
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
	};
};