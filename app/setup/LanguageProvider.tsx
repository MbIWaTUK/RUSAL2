import React, { useState, useEffect } from 'react';
import { translationMessages } from '../i18n';
import { IntlProvider } from 'react-intl';

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('ru');

  return (
    <IntlProvider
      locale={language}
      key={language}
      messages={translationMessages[language]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
};
