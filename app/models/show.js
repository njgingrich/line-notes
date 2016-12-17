import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  characters: hasMany('character'),
  assignedUsers: hasMany('user'),

  friendlyName: Ember.computed('name', function() {
    return this.get('name').dasherize();
  })
});
