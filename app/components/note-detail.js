import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,

  actions: {
    editNote() {
      this.toggleProperty('isEditing');
      this.attrs.edit(this.get('note'));
    }
  }
});
