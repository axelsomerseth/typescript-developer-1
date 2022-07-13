const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        chrome: "48",
      },
    },
  ],
  "@babel/preset-typescript",
];
const plugins = [];

module.exports = { presets, plugins };
