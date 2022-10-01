export default {
  '/introduction': [
    '/introduction/index',
    '/introduction/features',
    '/introduction/when',
    '/introduction/quickstart',
    '/introduction/roadmap',
    '/introduction/thanks',
  ],
  '/getting-started': [
    {
      title: 'Installation',
      'title.zh-CN': '安装',
      type: 'subMenu',
      children: [
        '/getting-started/installation/index',
        '/getting-started/installation/docker-compose',
        '/getting-started/installation/create-nocobase-app',
        '/getting-started/installation/git-clone',
      ],
    },
    '/getting-started/upgrading',
    '/getting-started/deployment',
  ],
  '/manual': [
    '/manual/functional-zoning',
    '/manual/collections',
    '/manual/menus',
    '/manual/blocks',
    '/manual/actions',
    '/manual/roles-permissions',
    '/manual/tabs',
    '/manual/file-storages',
    '/manual/system-settings',
    '/manual/plugins',
  ],
  '/development': [
    {
      title: 'Getting started',
      'title.zh-CN': '快速开始',
      type: 'group',
      children: ['/development/index', '/development/your-fisrt-plugin'],
    },
    {
      title: 'Extension Guides',
      'title.zh-CN': '扩展指南',
      type: 'group',
      children: [
        '/development/guide/index',
        '/development/guide/collections-fields',
        '/development/guide/resources-actions',
        '/development/guide/middleware',
        '/development/guide/commands',
        '/development/guide/events',
        '/development/guide/i18n',
        '/development/guide/migration',
        {
          title: 'UI Schema Designer',
          type: 'subMenu',
          children: [
            // '/development/guide/ui-schema-designer/index',
            '/development/guide/ui-schema-designer/what-is-ui-schema',
            '/development/guide/ui-schema-designer/extending-schema-components',
            // '/development/guide/ui-schema-designer/insert-adjacent',
            '/development/guide/ui-schema-designer/designable',
            '/development/guide/ui-schema-designer/component-library',
            // '/development/guide/ui-schema-designer/collection-manager',
            // '/development/guide/ui-schema-designer/acl',
            '/development/guide/ui-schema-designer/x-designer',
            '/development/guide/ui-schema-designer/x-initializer',
          ],
        },
        '/development/guide/ui-router',
        '/development/guide/settings-center',
        '/development/guide/commands',
      ],
    },
    {
      title: 'HTTP API',
      type: 'group',
      children: ['/development/http-api/index', '/development/http-api/rest-api'],
    },
    {
      title: 'Testing',
      'title.zh-CN': '单元测试',
      type: 'group',
      children: [
        '/development/pre-release/test', 
        // '/development/pre-release/build',
      ],
    },
  ],
  // {
  //   title: 'Development',
  //   'title.zh-CN': '开发指南',
  //   type: 'group',
  //   children: [
  //     '/development/directory-structure',
  //     '/development/env',
  //     '/development/nocobase-cli',
  //     {
  //       title: 'HTTP API',
  //       'title.zh-CN': 'HTTP API',
  //       type: 'subMenu',
  //       children: [
  //         '/development/http-api/index',
  //         '/development/http-api/rest-api',
  //         '/development/http-api/action-api',
  //         '/development/http-api/javascript-sdk',
  //         '/development/http-api/filter-operators',
  //       ],
  //     },
  //     '/development/javascript-sdk',
  //     {
  //       title: 'Plugin development',
  //       'title.zh-CN': '插件开发',
  //       type: 'subMenu',
  //       children: [
  //         '/development/plugin-development/index',
  //         {
  //           title: 'Server',
  //           'title.zh-CN': 'Server',
  //           type: 'subMenu',
  //           children: [
  //             '/development/plugin-development/server/overview',
  //             '/development/plugin-development/server/database',
  //             '/development/plugin-development/server/resourcer',
  //             '/development/plugin-development/server/middleware',
  //             '/development/plugin-development/server/acl',
  //             '/development/plugin-development/server/events',
  //             '/development/plugin-development/server/i18n',
  //             '/development/plugin-development/server/cli',
  //             '/development/plugin-development/server/app-manager',
  //             '/development/plugin-development/server/plugin-manager',
  //           ],
  //         },
  //         {
  //           title: 'Client',
  //           'title.zh-CN': 'Client',
  //           type: 'subMenu',
  //           children: [
  //             '/development/plugin-development/client/overview',
  //             {
  //               title: 'Providers',
  //               'title.zh-CN': 'Providers',
  //               type: 'subMenu',
  //               children: [
  //                 '/development/plugin-development/client/providers/acl',
  //                 '/development/plugin-development/client/providers/antd',
  //                 '/development/plugin-development/client/providers/api-client',
  //                 '/development/plugin-development/client/providers/collection-manager',
  //                 '/development/plugin-development/client/providers/i18n',
  //                 '/development/plugin-development/client/providers/route-switch',
  //                 '/development/plugin-development/client/providers/schema-component',
  //                 '/development/plugin-development/client/providers/schema-initializer',
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  '/api': [
    '/api/index',
    '/api/env',
    {
      title: '@nocobase/server',
      type: 'subMenu',
      children: ['/api/server/application', '/api/server/plugin-manager', '/api/server/plugin'],
    },
    {
      title: '@nocobase/database',
      type: 'subMenu',
      children: [
        '/api/database/index',
        '/api/database/collection',
        '/api/database/field',
        '/api/database/repository',
        '/api/database/relation-repository',
        '/api/database/operators',
      ],
    },
    {
      title: '@nocobase/resourcer',
      type: 'subMenu',
      children: [
        '/api/resourcer/index',
        '/api/resourcer/resource',
        '/api/resourcer/action',
        '/api/resourcer/middleware',
      ],
    },
    {
      title: '@nocobase/actions',
      path: '/api/actions',
    },
    {
      title: '@nocobase/client',
      type: 'subMenu',
      children: [
        '/api/client/index',
        '/api/client/application',
        '/api/client/route-switch',
        {
          title: 'SchemaDesigner',
          'title.zh-CN': 'SchemaDesigner',
          type: 'subMenu',
          children: [
            '/api/client/schema-designer/schema-component',
            '/api/client/schema-designer/schema-initializer',
            '/api/client/schema-designer/schema-settings',
          ],
        },
        {
          title: 'Extensions',
          'title.zh-CN': 'Extensions',
          type: 'subMenu',
          children: [
            '/api/client/extensions/schema-component',
            '/api/client/extensions/collection-manager',
            '/api/client/extensions/block-provider',
            '/api/client/extensions/acl',
          ],
        },
      ],
    },
    {
      title: '@nocobase/acl',
      path: '/api/acl',
    },
    {
      title: '@nocobase/cli',
      path: '/api/cli',
    },
    {
      title: '@nocobase/sdk',
      path: '/api/sdk',
    },
  ],
};
