import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  имя: DS.attr('string'),
  номерПаспорта: DS.attr('number'),
  отчество: DS.attr('string'),
  серияПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-123-менеджер.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-123-менеджер.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-123-менеджер.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-123-менеджер.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-123-менеджер.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-123-менеджер.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-123-менеджер.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МенеджерE', 'i-i-s-123-менеджер', {
    номерПаспорта: attr('Номер паспорта', { index: 0 }),
    отчество: attr('Отчество', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    адрес: attr('Адрес', { index: 4 }),
    фамилия: attr('Фамилия', { index: 5 }),
    серияПаспорта: attr('Серия паспорта', { index: 6 })
  });

  modelClass.defineProjection('МенеджерL', 'i-i-s-123-менеджер', {
    номерПаспорта: attr('Номер паспорта', { index: 0 }),
    отчество: attr('Отчество', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    адрес: attr('Адрес', { index: 4 }),
    фамилия: attr('Фамилия', { index: 5 }),
    серияПаспорта: attr('Серия паспорта', { index: 6 })
  });
};
