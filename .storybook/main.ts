import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|ts)'],
  addons: [],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  }
}

export default config
