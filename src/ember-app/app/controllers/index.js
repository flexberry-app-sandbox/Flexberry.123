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
            link: 'i-i-s-123-менеджер-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-менеджер-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-менеджер-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-123-производитель-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-производитель-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-123-заказ-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-заказ-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-123-товар-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-товар-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-123-клиент-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-клиент-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-123-поставщик-l',
            caption: i18n.t('forms.application.sitemap.123.i-i-s-123-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.123.i-i-s-123-поставщик-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})