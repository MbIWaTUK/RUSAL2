const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.noDeprecation = true;

module.exports = (options) => {
  return {
    //stats: 'verbose',
    mode: options.mode,
    entry: options.entry,
    // eslint-disable-next-line prefer-object-spread
    output: Object.assign(
      {
        path: path.resolve(process.cwd(), 'build'),
        // publicPath: '/',
      },
      options.output,
    ), // Merge with env dependent settings
    optimization: options.optimization,
    devServer: {
      historyApiFallback: true,
      hot: true,
      https: true,
      port: 3001,
      liveReload: true,
    },
    plugins: [...options.plugins, new MiniCssExtractPlugin()],

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: options.babelQuery,
          },
        },

        {
          test: /\.ts(x?)$/, // Transform typescript files with ts-loader
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        },
        {
          test: /(\.scss|\.css)$/,
          use: [
            { loader: 'style-loader' }, // to inject the result into the DOM as a style block
            { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
            { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
            { loader: 'sass-loader' }, // to convert SASS to CSS
          ],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
              options: {
                lessOptions: {
                  // If you are using less-loader@5 please spread the lessOptions to options directly
                  modifyVars: {
                    'primary-color': '#1DA57A',
                    'link-color': '#1DA57A',
                    'border-radius-base': '2px',
                  },
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },

        {
          test: /(\.woff|\.woff2|\.ttf|\.eot)$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
          },
        },
        {
          test: /\.(otf|pdf)$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                // Inline files smaller than 10 kB
                limit: 10 * 1024,
                noquotes: true,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                // Inline files smaller than 10 kB
                limit: 10 * 1024,
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: 'html-loader',
        },
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
        {
          test: /\.(mp4|ogv|webm)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        },
      ],
    },

    resolve: {
      modules: ['node_modules', 'app'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.react.js', '.css', '.scss'],
      mainFields: ['browser', 'jsnext:main', 'main'],
      fallback: {
        domain: require.resolve('domain-browser'),
        path: require.resolve('path-browserify'),
      },
    },
    devtool: options.devtool,
    target: 'web',
    performance: options.performance || {},
  };
};
