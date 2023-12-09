import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS123ЗаказLForm from './forms/i-i-s-123-заказ-l';
import IIS123КлиентLForm from './forms/i-i-s-123-клиент-l';
import IIS123МенеджерLForm from './forms/i-i-s-123-менеджер-l';
import IIS123ПоставщикLForm from './forms/i-i-s-123-поставщик-l';
import IIS123ПроизводительLForm from './forms/i-i-s-123-производитель-l';
import IIS123ТоварLForm from './forms/i-i-s-123-товар-l';
import IIS123ЗаказEForm from './forms/i-i-s-123-заказ-e';
import IIS123КлиентEForm from './forms/i-i-s-123-клиент-e';
import IIS123МенеджерEForm from './forms/i-i-s-123-менеджер-e';
import IIS123ПоставщикEForm from './forms/i-i-s-123-поставщик-e';
import IIS123ПроизводительEForm from './forms/i-i-s-123-производитель-e';
import IIS123ТоварEForm from './forms/i-i-s-123-товар-e';
import IIS123ЗаказModel from './models/i-i-s-123-заказ';
import IIS123КлиентModel from './models/i-i-s-123-клиент';
import IIS123МенеджерModel from './models/i-i-s-123-менеджер';
import IIS123ОплатаModel from './models/i-i-s-123-оплата';
import IIS123ПоставщикModel from './models/i-i-s-123-поставщик';
import IIS123ПроизводительModel from './models/i-i-s-123-производитель';
import IIS123ТоварModel from './models/i-i-s-123-товар';
import IIS123ТоварыModel from './models/i-i-s-123-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-123-заказ': IIS123ЗаказModel,
    'i-i-s-123-клиент': IIS123КлиентModel,
    'i-i-s-123-менеджер': IIS123МенеджерModel,
    'i-i-s-123-оплата': IIS123ОплатаModel,
    'i-i-s-123-поставщик': IIS123ПоставщикModel,
    'i-i-s-123-производитель': IIS123ПроизводительModel,
    'i-i-s-123-товар': IIS123ТоварModel,
    'i-i-s-123-товары': IIS123ТоварыModel
  },

  'application-name': '123',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '123',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '123',
          title: '123'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        123: {
          caption: '123',
          title: '123',
          'i-i-s-123-менеджер-l': {
            caption: 'Менеджер',
            title: ''
          },
          'i-i-s-123-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-123-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-123-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-123-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-123-поставщик-l': {
            caption: 'Поставщик',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-123-заказ-l': IIS123ЗаказLForm,
    'i-i-s-123-клиент-l': IIS123КлиентLForm,
    'i-i-s-123-менеджер-l': IIS123МенеджерLForm,
    'i-i-s-123-поставщик-l': IIS123ПоставщикLForm,
    'i-i-s-123-производитель-l': IIS123ПроизводительLForm,
    'i-i-s-123-товар-l': IIS123ТоварLForm,
    'i-i-s-123-заказ-e': IIS123ЗаказEForm,
    'i-i-s-123-клиент-e': IIS123КлиентEForm,
    'i-i-s-123-менеджер-e': IIS123МенеджерEForm,
    'i-i-s-123-поставщик-e': IIS123ПоставщикEForm,
    'i-i-s-123-производитель-e': IIS123ПроизводительEForm,
    'i-i-s-123-товар-e': IIS123ТоварEForm
  },

});

export default translations;
