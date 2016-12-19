import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),
  notify: Ember.inject.service('notify'),
  showActions: Ember.inject.service('show-actions'),
  newCharName: '',
  sortAttr: ['name'],
  sortedChars: Ember.computed.sort('model.characters', 'sortAttr'),

  actions: {
    selectChar(char) {
      window.scrollTo(0,0);
    }
  }
});
