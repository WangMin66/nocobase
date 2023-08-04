import {
  CollectionManagerContext,
  PluginManagerContext,
  SchemaComponent,
  SettingsCenterProvider,
  useResourceContext,
} from '@nocobase/client';
import { Card, message } from 'antd';
import React, { useContext } from 'react';
import { ExecutionLink } from './ExecutionLink';
import { ExecutionResourceProvider } from './ExecutionResourceProvider';
import { WorkflowLink } from './WorkflowLink';
import OpenDrawer from './components/OpenDrawer';
import expressionField from './interfaces/expression';
import { lang } from './locale';
import { instructions } from './nodes';
import { workflowSchema } from './schemas/workflows';
import { triggers } from './triggers';
import { useTranslation } from 'react-i18next';

// registerField(expressionField.group, 'expression', expressionField);

export const WorkflowContext = React.createContext({});

export function useWorkflowContext() {
  return useContext(WorkflowContext);
}

function useWorkflowReloadAction() {
  const { t } = useTranslation();
  const { resource } = useResourceContext();
  return {
    async run() {
      await resource.reload();
      message.success(t('Operation succeeded'));
    },
  };
}

function WorkflowPane() {
  return (
    <Card bordered={false}>
      <SchemaComponent
        schema={workflowSchema}
        scope={{
          useWorkflowReloadAction,
        }}
        components={{
          WorkflowLink,
          ExecutionResourceProvider,
          ExecutionLink,
          OpenDrawer,
        }}
      />
    </Card>
  );
}

export const WorkflowProvider = (props) => {
  const pmCtx = useContext(PluginManagerContext);
  const cmCtx = useContext(CollectionManagerContext);
  return (
    <SettingsCenterProvider
      settings={{
        workflow: {
          icon: 'PartitionOutlined',
          // title: `{{t("Workflow", { ns: "${NAMESPACE}" })}}`,
          title: lang('Workflow'),
          tabs: {
            workflows: {
              isBookmark: true,
              title: lang('Workflow'),
              component: WorkflowPane,
            },
          },
        },
      }}
    >
      <PluginManagerContext.Provider
        value={{
          components: {
            ...pmCtx?.components,
          },
        }}
      >
        <CollectionManagerContext.Provider
          value={{
            ...cmCtx,
            interfaces: {
              ...cmCtx.interfaces,
              expression: expressionField,
            },
          }}
        >
          <WorkflowContext.Provider value={{ triggers, instructions }}>{props.children}</WorkflowContext.Provider>
        </CollectionManagerContext.Provider>
      </PluginManagerContext.Provider>
    </SettingsCenterProvider>
  );
};
