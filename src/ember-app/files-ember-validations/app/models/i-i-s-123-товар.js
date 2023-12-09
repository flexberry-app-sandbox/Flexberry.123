import {
  defineNamespace,
  defineProjections,
  Model as ТоварMixin
} from '../mixins/regenerated/models/i-i-s-123-товар';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТоварMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
