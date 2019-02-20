const path = require('path');

//Defining entry file
const entryFile = path.resolve(__dirname, 'src', 'client', 'app.js');

//Defining output directory
const outputDir = path.resolve(__dirname, 'public');
module.exports = {
    entry: ['@babel/polyfill', entryFile],
    output: {
        filename: 'bundle.js',
        path: outputDir
    },
    module: {
        rules: [
            {
                //Transpile JS and JSX files
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                //Transpile CSS and SCSS files
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
};