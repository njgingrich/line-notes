import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  character: belongsTo('character'),
  page: attr('number'),
  line: attr('string'),
  note: attr('string'),
  error: attr('number'),
  date: attr('date')
});
