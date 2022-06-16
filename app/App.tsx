import React from 'react';
import { Routes } from './setup';
import 'antd/dist/antd.less';
import './setup/normalize.scss';
import { LanguageProvider } from 'setup/LanguageProvider';

export const App = () => {
  return (
    <LanguageProvider>
      <Routes />
    </LanguageProvider>
  );
};
