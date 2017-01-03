import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),
  notify: Ember.inject.service('notify'),
  showActions: Ember.inject.service('show-actions'),
  sortAttr: ['name'],
  sortedChars: Ember.computed.sort('model.characters', 'sortAttr'),
  isShowingAddModal: false,

  actions: {
    selectChar() {
      window.scrollTo(0,0);
    },
    toggleModal() {
      this.toggleProperty('isShowingAddModal');
    },
    addChar(name) {
      let show = this.get('show');
      this.get('showActions').addChar(name, show);
      this.get('notify').success('Added new character!');
      this.send('toggleModal');
    }
  }
});
