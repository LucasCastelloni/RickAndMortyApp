import i18next from 'i18next';
import {translations} from '../app/translations';

const translationsOptions = {
  compatibilityJSON: 'v3',
  lng: 'es',
  debug: false,
  resources: translations,
  defaultNS: 'common',
  fallbackNS: 'common',
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
};

i18next.init(translationsOptions);
