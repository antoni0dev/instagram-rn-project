module.exports = {
  presets: [
    'babel-preset-expo',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
