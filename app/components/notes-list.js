import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.sortedNotes = undefined;
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('sortedNotes', this.get('notes').sortBy('page'));
  },
  tagName: 'table'
});
