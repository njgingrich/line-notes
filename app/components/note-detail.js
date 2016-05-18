import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,

  actions: {
    editNote() {
      this.attrs.edit(this.get('note'));
    }
  }
});
