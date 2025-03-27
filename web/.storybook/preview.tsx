// 这段代码是使用 React 和 Storybook 进行开发的配置文件。
// 首先引入了 React 和一些特定的模块，包括Preview类型、withThemeByDataAttribute函数以及自定义的I18nServer组件等，并引入了一些样式文件。

import React from 'react'
import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import I18nServer from '../app/components/i18n-server'

import '../app/styles/globals.css'
import '../app/styles/markdown.scss'
import './storybook.css'
// 接着定义了一个名为decorators的数组，其中包含了两个装饰器。
// 第一个装饰器使用withThemeByDataAttribute函数来根据data-theme属性设置主题，提供了 light 和 dark 两种主题，并默认使用 light 主题。
// 第二个装饰器是一个函数，它接收一个Story组件作为参数，将其包裹在I18nServer组件中返回。
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
  (Story) => {
    return <I18nServer>
      <Story />
    </I18nServer>
  },
]
// 最后定义了一个名为preview的对象，它包含了parameters属性，其中的controls对象又有matchers属性，用于指定在 Storybook 的控制界面中对颜色和
// 日期类型的匹配规则。
// 最后，将preview对象导出作为默认导出。
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
