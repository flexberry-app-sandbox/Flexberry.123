import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.123.caption'),
          title: i18n.t('forms.application.sitemap.123.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.123.менеджеры.caption'),
            title: i18n.t('forms.application.sitemap.123.менеджеры.title'),
            children: [{
              link: 'i-i-s-123-менеджер-l',
              caption: i18n.t('forms.application.sitemap.123.менеджеры.i-i-s-123-менеджер-l.caption'),
              title: i18n.t('forms.application.sitemap.123.менеджеры.i-i-s-123-менеджер-l.title'),
              icon: 'archive',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.123.клиенты.caption'),
            title: i18n.t('forms.application.sitemap.123.клиенты.title'),
            children: [{
              link: 'i-i-s-123-клиент-l',
              caption: i18n.t('forms.application.sitemap.123.клиенты.i-i-s-123-клиент-l.caption'),
              title: i18n.t('forms.application.sitemap.123.клиенты.i-i-s-123-клиент-l.title'),
              icon: 'tasks',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.123.справочник-по-товарам.caption'),
            title: i18n.t('forms.application.sitemap.123.справочник-по-товарам.title'),
            children: [{
              link: 'i-i-s-123-поставщик-l',
              caption: i18n.t('forms.application.sitemap.123.справочник-по-товарам.i-i-s-123-поставщик-l.caption'),
              title: i18n.t('forms.application.sitemap.123.справочник-по-товарам.i-i-s-123-поставщик-l.title'),
              icon: 'address card',
              children: null
            }, {
              link: 'i-i-s-123-товар-l',
              caption: i18n.t('forms.application.sitemap.123.справочник-по-товарам.i-i-s-123-товар-l.caption'),
              title: i18n.t('forms.application.sitemap.123.справочник-по-товарам.i-i-s-123-товар-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-123-производитель-l',
              caption: i18n.t('forms.application.sitemap.123.справочник-по-товарам.i-i-s-123-производитель-l.caption'),
              title: i18n.t('forms.application.sitemap.123.справочник-по-товарам.i-i-s-123-производитель-l.title'),
              icon: 'briefcase',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.123.заказ.caption'),
            title: i18n.t('forms.application.sitemap.123.заказ.title'),
            children: [{
              link: 'i-i-s-123-заказ-l',
              caption: i18n.t('forms.application.sitemap.123.заказ.i-i-s-123-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.123.заказ.i-i-s-123-заказ-l.title'),
              icon: 'chart line',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})