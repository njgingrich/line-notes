import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  show: belongsTo('show'),
  notes: hasMany('line-note'),

  friendlyName: Ember.computed('name', function() {
    return this.get('name').dasherize();
  })
});
