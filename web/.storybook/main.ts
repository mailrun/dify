// web/.storybook/main.ts 文件是 Storybook 配置文件，用于配置 Storybook 的行为和外观。
// Storybook 是一个用于开发 UI 组件的环境，它允许你以隔离的方式渲染组件，并查看它们在不同状态下的表现。

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  // stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  stories: ['../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding', 
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',  // 表示 Storybook 将为 Next.js 项目提供特定的支持。
    options: {},
  },
  staticDirs: ['../public'], // 指定 Storybook 应该加载静态文件的目录
}
export default config
