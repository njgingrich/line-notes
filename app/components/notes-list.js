import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.sortedNotes = [];
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('sortedNotes', this.get('notes').sortBy('page'));
  },
  sortedNotes: null,
  noNotes: Ember.computed.empty('sortedNotes'),
  classNames: ["ui", "celled", "unstackable", "table"],
  tagName: 'table'
});
