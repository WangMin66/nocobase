import React, { createContext, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSystemSettings } from '../system-settings';

interface DocumentTitleContextProps {
  title?: any;
  setTitle?: (title?: any) => void;
}

export const DocumentTitleContext = createContext<DocumentTitleContextProps>({
  title: null,
  setTitle() {},
});

export const DocumentTitleProvider: React.FC<{ addonBefore?: string; addonAfter?: string }> = (props) => {
  const { addonBefore, addonAfter } = props;
  const [title, setTitle] = useState('');
  const documentTitle = `${addonBefore ? ` - ${addonBefore}` : ''}${title || ''}${
    addonAfter ? ` - ${addonAfter}` : ''
  }`;
  return (
    <DocumentTitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      {props.children}
    </DocumentTitleContext.Provider>
  );
};

export const RemoteDocumentTitleProvider: React.FC = (props) => {
  const ctx = useSystemSettings();
  return (
    <DocumentTitleProvider addonAfter={ctx?.data?.data?.title}>
      {props.children}
    </DocumentTitleProvider>
  );
};

export const useDocumentTitle = () => {
  return useContext(DocumentTitleContext);
};

export const useCurrentDocumentTitle = (title: string) => {
  const { setTitle } = useDocumentTitle();
  useEffect(() => {
    setTitle(title);
  }, []);
};
