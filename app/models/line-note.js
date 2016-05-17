import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  page: [
    validator('presence', true),
    validator('format', { type: 'number' })
  ],
  line: validator('presence', true),
  error: [
    validator('presence', true),
    validator('format', { type: 'number' })
  ]
});

export default Model.extend(Validations, {
  character: belongsTo('character'),
  page: attr('number'),
  line: attr('string'),
  note: attr('string'),
  error: attr('number'),
  date: attr('date')
});
