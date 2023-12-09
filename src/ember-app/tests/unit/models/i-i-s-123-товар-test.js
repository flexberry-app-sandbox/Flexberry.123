import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-123-товар', 'Unit | Model | i-i-s-123-товар', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-123-заказ',
    'model:i-i-s-123-клиент',
    'model:i-i-s-123-менеджер',
    'model:i-i-s-123-оплата',
    'model:i-i-s-123-поставщик',
    'model:i-i-s-123-производитель',
    'model:i-i-s-123-товар',
    'model:i-i-s-123-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
