import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоставкиEnum from '../enums/i-i-s-123-тип-доставки';

export default FlexberryEnum.extend({
  enum: ТипДоставкиEnum,
  sourceType: 'IIS.123.ТипДоставки'
});
