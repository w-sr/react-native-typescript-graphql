module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@lib': './lib',
          '@theme': './theme',
          '@assets': './assets',
          '@screens': './screens',
          '@context': './context',
          '@components': './components',
          '@graphql': './graphql',
          '@routes': './routes',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
