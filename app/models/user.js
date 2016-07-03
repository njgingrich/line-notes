import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  uid: attr('string'),
  name: attr('string'),
  email: attr('string'),
  shows: hasMany('show')
});
