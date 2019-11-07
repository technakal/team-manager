const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        ie: 11,
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
    },
  ],
  {
    plugins: [
      'babel-transform-async-to-generator',
      'babel-transform-es2015-modules-commonjs',
    ],
  },
];

module.exports = { presets };
