import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { translationMessages } from '../i18n';

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
