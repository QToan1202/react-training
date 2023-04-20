const { loadConfigFromFile, mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  stories: ['../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    const { config: userConfig } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.js'))

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    })
  },
}
