import i18next from 'i18next';

export const emailExpression =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FIELDS = [
  {
    id: 1,
    name: 'firstName',
    title: i18next.t('Login:firstName'),
    rules: {required: i18next.t('Login:requiredField')},
  },
  {
    id: 2,
    name: 'lastName',
    title: i18next.t('Login:lastName'),
    rules: {required: i18next.t('Login:requiredField')},
  },
  {
    id: 3,
    name: 'email',
    title: i18next.t('Login:email'),
    rules: {
      required: i18next.t('Login:requiredField'),
      pattern: {
        value: emailExpression,
        message: i18next.t('Login:invalidEmail'),
      },
    },
  },
];
