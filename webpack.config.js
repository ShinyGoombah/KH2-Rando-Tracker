module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'kh2RandoIndex.js',
    path: `${__dirname}/public`,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'semantic-ui-react': 'semanticUIReact'
  },
};