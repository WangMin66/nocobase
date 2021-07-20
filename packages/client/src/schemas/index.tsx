import React from 'react';
import { ISchema, observer, Schema, useField } from '@formily/react';
import constate from 'constate';
import { useState } from 'react';
import { createContext } from 'react';

import { extend } from 'umi-request';
import { isVoidField } from '@formily/core';
import { useRequest } from 'ahooks';

export * from '../components/schema-renderer';

export function mapReadPretty(component, readPrettyProps) {
  return function (target) {
    return observer(
      (props) => {
        const field = useField()
        if (!isVoidField(field) && field?.pattern === 'readPretty') {
          return React.createElement(component, {
            ...readPrettyProps,
            ...props,
          })
        }
        return React.createElement(target, props)
      },
      {
        forwardRef: true,
      }
    )
  };
}

export const VisibleContext = createContext(null);
export const DesignableBarContext = createContext(null);

const [PageTitleContextProvider, usePageTitleContext] = constate(() => {
  return useState(null);
});

export { PageTitleContextProvider, usePageTitleContext };

export function useDefaultAction() {
  return {
    async run() {},
  };
}

export const request = extend({
  prefix: 'http://localhost:23003/api/',
  timeout: 1000,
});

export async function createOrUpdateCollection(data: any) {
  return await request('collections:createOrUpdate', {
    method: 'post',
    data,
  });
}

export async function deleteCollection(name) {
  await request('collections:destroy', {
    method: 'post',
    params: {
      filter: {
        name,
      },
    },
  });
}

export async function createSchema(schema: ISchema) {
  if (!schema['key']) {
    return;
  }
  return await request('ui_schemas:create', {
    method: 'post',
    data: schema.toJSON(),
  });
}

export async function updateSchema(schema: ISchema) {
  if (!schema['key']) {
    return;
  }
  return await request(`ui_schemas:update/${schema.key}`, {
    method: 'post',
    data: Schema.isSchemaInstance(schema) ? schema.toJSON() : schema,
  });
}

export async function removeSchema(schema: ISchema) {
  if (!schema['key']) {
    return;
  }
  await request('ui_schemas:destroy', {
    method: 'post',
    params: {
      filter: {
        key: schema['key'],
      },
    },
  });
}

const [CollectionContextProvider, useCollectionContext] = constate(() => {
  return useRequest('collections:findAll', {
    formatResult: (result) => result?.data,
  });
});

export { CollectionContextProvider, useCollectionContext };
