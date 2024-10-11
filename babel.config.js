module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: { version: 3 },
        debug: true,
        useBuiltIns: "usage",
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11",
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-strict-mode",
    /*
    [
      "@babel/plugin-transform-strict-mode",
      {
        strict: false,
      },
    ],
*/
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining",
  ],
};
