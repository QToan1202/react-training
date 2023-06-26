const { loadConfigFromFile, mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  "stories": [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config

    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "../src"),
          },
          {
            find: "@assets",
            replacement: path.resolve(__dirname, "../src/assets"),
          },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "../src/components"),
          },
          {
            find: "@data",
            replacement: path.resolve(__dirname, "../src/data"),
          },
          {
            find: "@helper",
            replacement: path.resolve(__dirname, "../src/helper"),
          },
          {
            find: "@types",
            replacement: path.resolve(__dirname, "../src/types"),
          },
        ],
      },
    };
  },

}