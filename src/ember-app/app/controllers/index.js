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
          caption: i18n.t('forms.application.sitemap.заказ.caption'),
          title: i18n.t('forms.application.sitemap.заказ.title'),
          children: [{
            link: 'i-i-s-123-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-123-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-123-заказ-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-по-товарам.caption'),
          title: i18n.t('forms.application.sitemap.справочник-по-товарам.title'),
          children: [{
            link: 'i-i-s-123-поставщик-l',
            caption: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-123-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-123-поставщик-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-123-товар-l',
            caption: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-123-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-123-товар-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-123-производитель-l',
            caption: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-123-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-123-производитель-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-123-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-123-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-123-клиент-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.менеджеры.caption'),
          title: i18n.t('forms.application.sitemap.менеджеры.title'),
          children: [{
            link: 'i-i-s-123-менеджер-l',
            caption: i18n.t('forms.application.sitemap.менеджеры.i-i-s-123-менеджер-l.caption'),
            title: i18n.t('forms.application.sitemap.менеджеры.i-i-s-123-менеджер-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})