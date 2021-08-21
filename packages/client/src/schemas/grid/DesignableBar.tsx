import React, { useContext, useMemo, useRef, useState } from 'react';
import { createForm } from '@formily/core';
import {
  SchemaOptionsContext,
  Schema,
  useFieldSchema,
  observer,
  SchemaExpressionScopeContext,
  FormProvider,
  ISchema,
  useField,
  useForm,
  RecursionField,
} from '@formily/react';
import { useSchemaPath, SchemaField, useDesignable, removeSchema } from '../';
import get from 'lodash/get';
import { Button, Dropdown, Menu, Space } from 'antd';
import { MenuOutlined, DragOutlined } from '@ant-design/icons';
import cls from 'classnames';
import { FormLayout } from '@formily/antd';
import './style.less';
import AddNew from '../add-new';
import { DraggableBlockContext } from '../../components/drag-and-drop';
import { isGridRowOrCol } from '../grid';
import constate from 'constate';
import { useEffect } from 'react';
import { uid } from '@formily/shared';
import { getSchemaPath } from '../../components/schema-renderer';
import { useCollection, useCollectionContext } from '../../constate';
import { useTable } from '../table';
import { DragHandle } from '../../components/Sortable';

export const DesignableBar = observer((props) => {
  const field = useField();
  const { designable, schema, refresh, deepRemove } = useDesignable();
  const [visible, setVisible] = useState(false);
  const { dragRef } = useContext(DraggableBlockContext);
  const { props: tableProps } = useTable();
  const collectionName = field.componentProps?.collectionName || tableProps?.collectionName;
  const { collection } = useCollection({ collectionName });
  return (
    <div className={cls('designable-bar', { active: visible })}>
      <div className={'designable-info'}>{collection?.title || collection?.name}</div>
      <span
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cls('designable-bar-actions', { active: visible })}
      >
        <Space size={2}>
          <AddNew.CardItem defaultAction={'appendChild'} ghost />
          {/* <DragHandle /> */}
          <Dropdown
            trigger={['click']}
            visible={visible}
            onVisibleChange={(visible) => {
              setVisible(visible);
            }}
            overlay={
              <Menu>
                <Menu.Item
                  key={'delete'}
                  onClick={async () => {
                    const removed = deepRemove();
                    // console.log({ removed })
                    const last = removed.pop();
                    await removeSchema(last);
                  }}
                >
                  移除
                </Menu.Item>
              </Menu>
            }
          >
            <MenuOutlined />
          </Dropdown>
        </Space>
      </span>
    </div>
  );
});
