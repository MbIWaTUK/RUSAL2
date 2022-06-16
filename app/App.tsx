import React from 'react';

import { Routes } from './setup';
import { LanguageProvider } from 'setup/LanguageProvider';

import 'antd/dist/antd.less';
import './setup/normalize.less';

export const App = () => {
  return (
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  );
};
