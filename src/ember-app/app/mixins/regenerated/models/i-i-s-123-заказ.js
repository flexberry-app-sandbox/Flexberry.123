import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доставка: DS.attr('i-i-s-123-тип-доставки'),
  номерЗаказа: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-123-клиент', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-123-менеджер', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-123-товар', { inverse: null, async: false }),
  оплата: DS.hasMany('i-i-s-123-оплата', { inverse: 'заказ', async: false }),
  товары: DS.hasMany('i-i-s-123-товары', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доставка: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.доставка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оплата: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-123-заказ.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-123-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    доставка: attr('Доставка', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    товар: belongsTo('i-i-s-123-товар', 'Товар', {
      свойства: attr('Свойства', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'свойства' }),
    менеджер: belongsTo('i-i-s-123-менеджер', 'Менеджер', {
      отчество: attr('Отчество', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'отчество' }),
    клиент: belongsTo('i-i-s-123-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    оплата: hasMany('i-i-s-123-оплата', 'Оплата', {
      
    }),
    товары: hasMany('i-i-s-123-товары', 'Товары', {
      цена: attr('Цена', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      количество: attr('Количество', { index: 2 }),
      сумма: attr('Сумма', { index: 3 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-123-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    доставка: attr('Доставка', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    товар: belongsTo('i-i-s-123-товар', 'Свойства', {
      свойства: attr('Свойства', { index: 3 })
    }, { index: -1, hidden: true }),
    менеджер: belongsTo('i-i-s-123-менеджер', 'Отчество', {
      отчество: attr('Отчество', { index: 4 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-123-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
