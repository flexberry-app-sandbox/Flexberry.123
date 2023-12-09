import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-123-заказ', 'Unit | Serializer | i-i-s-123-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-123-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-123-способ1',
    'transform:i-i-s-123-тип-доставки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
