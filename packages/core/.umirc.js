import { resolve } from 'path'
export default {
  mode: 'site',
  logo:
    'https://img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
  title: 'Formily',
  hash: true,
  favicon:
    'https://img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
  outputPath: './doc-site',
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: 'API',
      path: '/api',
    },
    {
      title: '主站',
      path: 'https://v2.formilyjs.org',
    },
    {
      title: 'GITHUB',
      path: 'https://github.com/alibaba/formily',
    },
  ],
  styles: [
    `.__dumi-default-navbar-logo{
      height: 60px !important;
      width: 150px !important;
      padding-left:0 !important;
      color: transparent !important;
    }
    .__dumi-default-navbar{
      padding: 0 28px !important;
    }
    .__dumi-default-layout-hero{
      background-image: url(//img.alicdn.com/imgextra/i4/O1CN01ZcvS4e26XMsdsCkf9_!!6000000007671-2-tps-6001-4001.png);
      background-size: cover;
      background-repeat: no-repeat;
    }
    nav a{
      text-decoration: none !important;
    }
    `,
  ],
  menus: {
    '/guide': [
      {
        title: '概览',
        children: [
          {
            title: '介绍',
            path: '/guide',
          },
          { title: '核心架构', path: '/guide/architecture' },
        ],
      },
      {
        title: '概念',
        children: [
          {
            title: 'MVVM',
            path: '/guide/mvvm',
          },
          {
            title: '表单模型',
            path: '/guide/form',
          },
          {
            title: '字段模型',
            path: '/guide/field',
          },
        ],
      },
    ],
  },
}
