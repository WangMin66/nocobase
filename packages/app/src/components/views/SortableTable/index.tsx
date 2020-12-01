import React from 'react';
// @ts-ignore
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import arrayMove from 'array-move';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import './style.less';

export const SortableItem = sortableElement(props => <tr {...props} />);
export const SortableContainer = sortableContainer(props => <tbody {...props} />);

export const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
));

interface Props {
  data: any, 
  mutate: any,
  rowKey: any, 
  onMoved: any,
}

export const components = ({data = {}, rowKey, mutate, onMoved}: Props) => {
  return {
    body: {
      wrapper: props => (
        <SortableContainer
          useDragHandle
          helperClass="row-dragging"
          onSortEnd={async ({ oldIndex, newIndex, ...restProps }) => {
            if (oldIndex !== newIndex) {
              const list = arrayMove([].concat(data.list), oldIndex, newIndex).filter(el => !!el);
              console.log({oldIndex, newIndex, list});
              mutate({
                ...data,
                list,
              });
              const resourceKey = get(list, [newIndex, rowKey]);
              await onMoved({resourceKey, offset: newIndex - oldIndex});
            }
          }}
          {...props}
        />
      ),
      row: ({ className, style, ...restProps }) => {
        // function findIndex base on Table rowKey props and should always be a right array index
        const index = findIndex(data.list, (x: any) => x[rowKey] === restProps['data-row-key']);
        return <SortableItem index={index} {...restProps} />;
      },
    },
  };
};

export function fields2columns(fields) {
  const columns: any[] = fields.map(field => {
    const type = get(field, 'component.type');
    if (type === 'sort') {
      field.render = () => <DragHandle/>;
    }
    return {
      ...field,
      ...(field.component||{}),
    }
  });
  return columns;
}
