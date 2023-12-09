import { Serializer as ПоставщикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-123-поставщик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПоставщикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
